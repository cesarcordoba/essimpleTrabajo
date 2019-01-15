"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const localStrategy = require("passport-local");
const facebookStrategy = require("passport-facebook");
const twitterStrategy = require("passport-twitter");
const googleStrategy = require("passport-google-oauth20");
const jwt = require("jsonwebtoken");
const config_1 = require("../../conf/config");
const modelo_1 = require("../avatar/modelo");
const modelo_2 = require("../llave/modelo");
const modelo_3 = require("../usuario/modelo");
const modelo_4 = require("../log/modelo");
class AutentificacionController {
    //  Inicia el constructor
    constructor() {
        // Termina el constructor
        //
        // Metodos
        this.token = (req, res, next) => jwt.verify(req.params.token, config_1.config.token_secreto, (err, decoded) => {
            if (err)
                res.send({ success: false, message: 'token invlid' });
            else
                res.json(decoded);
        });
        this.login = (req, res, next) => passport.authenticate('login', (err, user, info) => {
            if (err)
                return next(err);
            if (!user)
                return res.send({ success: false, message: 'Incorrect username or password.' });
            req.login(user, (err) => {
                if (err)
                    return next(err);
                var token = jwt.sign({
                    user: user
                }, config_1.config.token_secreto, { expiresIn: '24h' });
                return res.send({ success: true, message: 'Authentication succeeded', token: token });
            });
        })(req, res, next);
        this.registro = (req, res, next) => passport.authenticate('registro', (err, user, info) => {
            if (err)
                return next(err);
            if (!user)
                return res.send({ success: false, message: info });
            req.login(user, (err) => {
                if (err)
                    return next(err);
                var token = jwt.sign({
                    user: user
                }, config_1.config.token_secreto, { expiresIn: '24h' });
                return res.send({ success: true, message: 'Authentication succeeded', token: token, usuario: user });
            });
        })(req, res, next);
        this.tokenSocial = (req, res, next) => modelo_3.Usuario.findOne({ where: { 'correo': req.user.correo } })
            .then(usering => jwt.sign({ user: usering }, config_1.config.token_secreto, { expiresIn: '1h' }))
            .then(token => res.redirect('https://www.essimple.mx/social/' + token));
        //.then(token => res.redirect('http://localhost:4200/social/' + token)) <---USAR EN DESARROLLO
        this.avatar = (req, res, next) => modelo_3.Usuario.findById(req.params.id, { include: [modelo_2.Llave] })
            .then(user => res.status(200).json(user));
        this.facebook = (req, res, next) => passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
        this.facebookcallback = (req, res, next) => passport.authenticate('facebook', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);
        this.twitter = (req, res, next) => passport.authenticate('twitter', { scope: ['email'] })(req, res, next);
        this.twittercallback = (req, res, next) => passport.authenticate('twitter', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);
        this.google = (req, res, next) => passport.authenticate('google', { scope: ['email'] })(req, res, next);
        this.googlecallback = (req, res, next) => passport.authenticate('google', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);
        this.instagram = (req, res, next) => passport.authenticate('instagram', { scope: ['basic', 'public_content', 'follower_list', 'comments', 'relationships', 'likes'] })(req, res, next);
        this.instagramcallback = (req, res, next) => passport.authenticate('instagram', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);
        passport.serializeUser((user, done) => done(null, { id: user.id, nombre: user.nombre, correo: user.correo }));
        passport.deserializeUser((user, done) => done(null, user));
        passport.use('login', new localStrategy.Strategy({
            usernameField: 'correo', passwordField: 'password', passReqToCallback: true
        }, (req, username, password, done) => modelo_3.Usuario.findOne({ where: { 'correo': username }, include: [modelo_2.Llave] })
            .then(user => {
            if (user == null)
                return done(null, false);
            if (user.Llave.password === password) {
                modelo_4.Log.create({ IdUsuario: user.id });
                return done(null, user);
            }
            // if (user.autenticacion(password))
            // 	return done(null, user);
            return done(null, false);
        })));
        passport.use('registro', new localStrategy.Strategy({
            usernameField: 'correo', passwordField: 'Llave[password]', passReqToCallback: true
        }, (req, username, password, done) => modelo_3.Usuario.findOrCreate({ where: { 'correo': username }, include: [modelo_2.Llave], defaults: Object.assign(req.body) })
            .spread((user, created) => created ? done(null, user) : done(null, false)).error(err => done(err, null))));
        passport.use('twitter', new twitterStrategy.Strategy({
            consumerKey: config_1.config.keys.twitter.consumerKey,
            consumerSecret: config_1.config.keys.twitter.consumerSecret,
            callbackURL: config_1.config.keys.twitter.callbackURL,
            includeEmail: true
        }, (token, tokenSecret, profile, done) => process.nextTick(() => this.socializar('IdTwitter', 'fb_avatar', profile, done))));
        passport.use('facebook', new facebookStrategy.Strategy({
            clientID: config_1.config.keys.facebook.clientID,
            clientSecret: config_1.config.keys.facebook.clientSecret,
            callbackURL: config_1.config.keys.facebook.callbackURL,
            profileFields: [
                'id',
                'emails',
                'displayName',
                'picture',
                'cover',
                'first_name',
                'last_name',
                'locale',
                'gender',
                'hometown'
            ]
        }, (accessToken, refreshToken, profile, done) => {
            process.nextTick(() => this.socializar('IdFacebook', 'fb_avatar', profile, done));
        }));
        passport.use('google', new googleStrategy.Strategy({
            clientID: config_1.config.keys.google.clientID,
            clientSecret: config_1.config.keys.google.clientSecret,
            callbackURL: config_1.config.keys.google.callbackURL,
        }, (token, tokenSecret, profile, done) => process.nextTick(() => this.socializar('IdGoogle', 'fb_avatar', profile, done))));
    }
    socializar(red_id, avatar_id, profile, done) {
        console.log(profile);
        let avatar_image = profile.photos != undefined ? profile.photos[0].value : 'assets/images/perfil.png';
        modelo_2.Llave.find({
            where: {
                [red_id]: profile.id
            },
            include: [{ model: modelo_3.Usuario }]
        })
            .then(Key => {
            console.log(Key);
            if (Key) {
                modelo_1.Avatar.update({ link: avatar_image }, { where: { IdUsuario: Key.Usuario.id } });
                Key.Usuario ?
                    Key.Usuario.update({ nombre: profile.name.givenName, apellido: profile.name.familyName }).then(user => done(null, user)) : null;
            }
            else {
                modelo_3.Usuario.findOrCreate({
                    where: {
                        correo: profile.emails[0].value
                    },
                    defaults: {
                        nombre: profile.name.givenName,
                        apellido: profile.name.familyName,
                        correo: profile.emails[0].value,
                        sexo: profile.gender,
                        status: 1,
                        tipo: 'inversionista'
                    },
                    include: [modelo_2.Llave]
                }).spread((user, created) => created ?
                    this.usuarioCreado(user, red_id, avatar_id, profile, done, avatar_image)
                    :
                        this.usuarioEncontrado(user, red_id, avatar_id, profile, done, avatar_image));
            }
        }, (err) => done(err));
    }
    usuarioEncontrado(user, red_id, avatar_id, profile, done, avatar_image) {
        if (user.Llave) {
            user.Llave.update({ [red_id]: profile.id }).then(algo => done(null, user));
        }
        else {
            user.$create('Llave', { [red_id]: profile.id })
                .then((keysito) => {
                done(null, user);
                modelo_1.Avatar.update({ link: avatar_image }, { where: { IdUsuario: user.id } });
            });
        }
    }
    usuarioCreado(user, red_id, avatar_id, profile, done, avatar_image) {
        console.log('creado');
        user.$create('Llave', { [red_id]: profile.id })
            .then((keysito) => {
            done(null, user);
            modelo_1.Avatar.create({ link: avatar_image, IdUsuario: user.id });
        });
    }
}
exports.AutentificacionController = AutentificacionController;
