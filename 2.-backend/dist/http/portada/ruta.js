"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class PortadaRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.PortadaController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/portada')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/portada/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/portada/paginacion')
            .post(this.controlador.paginacion);
        this._rutas.route('/data/portada/xProyecto/:id')
            .get(this.controlador.xproyecto);
        this._rutas.route('/data/portada/Proyecto/:id')
            .get(this.controlador.proyecto);
    }
    rutas() {
        return this._rutas;
    }
}
exports.PortadaRouter = PortadaRouter;
