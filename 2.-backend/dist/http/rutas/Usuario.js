"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuario_1 = require("../controladores/Usuario");
class UsuarioRouter {
    constructor() {
        this._rutas = express_1.Router();
        this._usController = new Usuario_1.UsuarioController();
        this.init();
    }
    init() {
        this._rutas.route('/data/usuario')
            .get(this._usController.buscar)
            .post(this._usController.crear);
        this._rutas.route('/data/usuario/:id')
            .get(this._usController.buscar)
            .put(this._usController.actualizar)
            .delete(this._usController.eliminar);
    }
    rutas() {
        return this._rutas;
    }
}
exports.UsuarioRouter = UsuarioRouter;
