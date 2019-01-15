"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Prospecto_1 = require("../controladores/Prospecto");
class ProspectoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this._controller = new Prospecto_1.ProspectoController();
        this.init();
    }
    init() {
        this._rutas.route('/data/prospecto')
            .get(this._controller.buscar)
            .post(this._controller.crear);
        this._rutas.route('/data/prospecto/:id')
            .get(this._controller.buscar)
            .put(this._controller.actualizar)
            .delete(this._controller.eliminar);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ProspectoRouter = ProspectoRouter;
