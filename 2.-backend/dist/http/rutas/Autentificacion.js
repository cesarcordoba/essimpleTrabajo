"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Autentificacion_1 = require("../controladores/Autentificacion");
class AutentificacionRouter {
    constructor() {
        this._router = express_1.Router();
        this._authController = new Autentificacion_1.AutentificacionController();
        this.init();
    }
    init() {
        this._router.route('/data/usuario/avatar/:id')
            .get(this._authController.avatar);
        this._router.route('/data/registro')
            .post(this._authController.registro);
        this._router.route('/data/login')
            .post(this._authController.login);
        this._router.route('/data/token/:token')
            .get(this._authController.token);
        this._router.route('/token')
            .get(this._authController.tokenSocial);
        this._router.route('/login/facebook')
            .get(this._authController.facebook);
        this._router.route('/login/twitter')
            .get(this._authController.twitter);
        this._router.route('/login/instagram')
            .get(this._authController.instagram);
        this._router.route('/login/google')
            .get(this._authController.google);
        this._router.route('/login/facebook/callback')
            .get(this._authController.facebookcallback);
        this._router.route('/login/twitter/callback')
            .get(this._authController.twittercallback);
        this._router.route('/login/instagram/callback')
            .get(this._authController.instagramcallback);
        this._router.route('/login/google/callback')
            .get(this._authController.googlecallback);
    }
    rutas() {
        return this._router;
    }
}
exports.AutentificacionRouter = AutentificacionRouter;
