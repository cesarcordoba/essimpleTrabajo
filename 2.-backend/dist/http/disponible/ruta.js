"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class DisponibleRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.DisponibleController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/disponible')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/disponible/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/disponible/paginacion')
            .post(this.controlador.paginacion);
    }
    rutas() {
        return this._rutas;
    }
}
exports.DisponibleRouter = DisponibleRouter;
