import * as passport from 'passport'
import * as localStrategy from 'passport-local';
import * as facebookStrategy from 'passport-facebook';
import * as twitterStrategy from 'passport-twitter';
import * as googleStrategy from 'passport-google-oauth20';
import * as jwt from 'jsonwebtoken';

import { config } from '../../conf/config';

import { Avatar } from '../avatar/modelo';
import { Llave } from '../llave/modelo';
import { Usuario } from '../usuario/modelo';
import { Log } from '../log/modelo';

export class AutentificacionController {


	//  Inicia el constructor

	constructor() {
		passport.serializeUser<any, any>((user, done) => done(null, { id: user.id, nombre: user.nombre, correo: user.correo }));

		passport.deserializeUser<any, any>((user, done) => done(null, user));

		passport.use('login', new localStrategy.Strategy({
			usernameField: 'correo', passwordField: 'password', passReqToCallback: true
		}, (req, username, password, done) => Usuario.findOne({ where: { 'correo': username }, include: [Llave] })
			.then(user => {
				if (user == null)
					return done(null, false);

				if(user.Llave.password === password){
					Log.create({IdUsuario : user.id })
					return done(null, user);
				}
				// if (user.autenticacion(password))
				// 	return done(null, user);

				return done(null, false);
			})
		));

		passport.use('registro', new localStrategy.Strategy({
			usernameField: 'correo', passwordField: 'Llave[password]', passReqToCallback: true
		}, (req, username, password, done) => Usuario.findOrCreate({ where: { 'correo': username }, include: [ Llave ], defaults: Object.assign(req.body)})
			.spread((user, created) => created ? done(null, user)  : done(null, false)).error(err => done(err, null))));

		passport.use('twitter', new twitterStrategy.Strategy({
			consumerKey: config.keys.twitter.consumerKey,
			consumerSecret: config.keys.twitter.consumerSecret,
			callbackURL: config.keys.twitter.callbackURL,
			includeEmail: true
		}, (token, tokenSecret, profile, done) =>
				process.nextTick(() => this.socializar('IdTwitter', 'fb_avatar', profile, done))
		));

		passport.use('facebook', new facebookStrategy.Strategy({
			clientID: config.keys.facebook.clientID,
			clientSecret: config.keys.facebook.clientSecret,
			callbackURL: config.keys.facebook.callbackURL,
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
			process.nextTick(() => this.socializar('IdFacebook', 'fb_avatar', profile, done))
		}
		));

		passport.use('google', new googleStrategy.Strategy({
			clientID: config.keys.google.clientID,
			clientSecret: config.keys.google.clientSecret,
			callbackURL: config.keys.google.callbackURL,
		}, (token, tokenSecret, profile, done) =>
				process.nextTick(() => this.socializar('IdGoogle', 'fb_avatar', profile, done))
		));
	}

	// Termina el constructor
	//
	// Metodos

	token = (req, res, next) => jwt.verify(req.params.token, config.token_secreto, (err, decoded) => {
		if (err)
			res.send({ success: false, message: 'token invlid' })
		else
			res.json(decoded)
	});

	login = (req, res, next) => passport.authenticate('login', (err, user, info) => {
		if (err)
			return next(err);

		if (!user)
			return res.send({ success: false, message: 'Incorrect username or password.' });

		req.login(user, (err) => {
			if (err)
				return next(err);

			var token = jwt.sign({
				user: user
			}, config.token_secreto, { expiresIn: '24h' });
			return res.send({ success: true, message: 'Authentication succeeded', token: token });
		});
	})(req, res, next);

	registro = (req, res, next) => passport.authenticate('registro', (err, user, info) => {
		if (err)
			return next(err);

		if (!user)
			return res.send({ success: false, message: info });

		req.login(user, (err) => {
			if (err)
				return next(err);

			var token = jwt.sign({
				user: user
			}, config.token_secreto, { expiresIn: '24h' });
			return res.send({ success: true, message: 'Authentication succeeded', token: token, usuario : user });
		});
	})(req, res, next);


	tokenSocial = (req, res, next) => Usuario.findOne({ where: { 'correo': req.user.correo } })
		.then(usering => jwt.sign({ user: usering }, config.token_secreto, { expiresIn: '1h' }))
		//-.then(token => res.redirect('https://www.essimple.mx/social/' + token))
		.then(token => res.redirect('http://localhost:4200/social/' + token))
	avatar = (req, res, next) => Usuario.findById(req.params.id, { include: [Llave] })
		.then(user => res.status(200).json(user))


	facebook = (req, res, next) => passport.authenticate('facebook', { scope: ['email'] })(req, res, next);

	facebookcallback = (req, res, next) => passport.authenticate('facebook', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);

	twitter = (req, res, next) => passport.authenticate('twitter', { scope: ['email'] })(req, res, next);

	twittercallback = (req, res, next) => passport.authenticate('twitter', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);

	google = (req, res, next) => passport.authenticate('google', { scope: ['email'] })(req, res, next);

	googlecallback = (req, res, next) => passport.authenticate('google', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);

	instagram = (req, res, next) => passport.authenticate('instagram', { scope: ['basic', 'public_content', 'follower_list', 'comments', 'relationships', 'likes'] })(req, res, next);

	instagramcallback = (req, res, next) => passport.authenticate('instagram', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);

	private socializar(red_id, avatar_id, profile, done) {
			console.log(profile)
			let avatar_image = profile.photos != undefined ? profile.photos[0].value : 'assets/images/perfil.png'


			Llave.find({
				where: {
					[red_id]: profile.id
				},
				include: [{ model: Usuario }]
			})
			.then(Key => {
				console.log(Key)
				if (Key) {
					Avatar.update({ link : avatar_image }, { where : { IdUsuario : Key.Usuario.id } })
					Key.Usuario ?
						Key.Usuario.update({ nombre: profile.name.givenName, apellido : profile.name.familyName }).then(user => done(null, user)) : null;

				} else {
					Usuario.findOrCreate({
						where: {
							correo: profile.emails[0].value
						},
						defaults: {
							nombre: profile.name.givenName,
							apellido : profile.name.familyName,
							correo: profile.emails[0].value,
							sexo: profile.gender,
							status : 1,
							tipo : 'inversionista'
						},
						include: [Llave]
					}).spread((user: Usuario, created) =>
						created ?
							this.usuarioCreado(user, red_id, avatar_id, profile, done, avatar_image)
							:
							this.usuarioEncontrado(user, red_id, avatar_id, profile, done, avatar_image));

				}
			}, (err) => done(err))
	}

	private usuarioEncontrado(user: Usuario, red_id, avatar_id, profile, done, avatar_image) {
		if (user.Llave) {
			user.Llave.update({ [red_id]: profile.id }).then(algo => done(null, user))
		} else {
			user.$create('Llave', { [red_id]: profile.id })
				.then((keysito: Llave) => {
					done(null, user)
					Avatar.update({ link : avatar_image }, { where : { IdUsuario : user.id } })
			})

		}
	}

	private usuarioCreado(user: Usuario, red_id, avatar_id, profile, done, avatar_image) {
		console.log('creado')
		user.$create('Llave', { [red_id]: profile.id })
			.then((keysito: Llave) => {
				done(null, user)
				Avatar.create({ link : avatar_image, IdUsuario : user.id })
			})
	}

}
