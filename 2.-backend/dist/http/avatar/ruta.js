"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class AvatarRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.AvatarController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/avatar')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/avatar/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/avatar/paginacion')
            .post(this.controlador.paginacion);
        this._rutas.route('/data/avatar/xUsuario/:id')
            .get(this.controlador.xusuario);
        this._rutas.route('/data/avatar/Usuario/:id')
            .get(this.controlador.usuario);
    }
    rutas() {
        return this._rutas;
    }
}
exports.AvatarRouter = AvatarRouter;
