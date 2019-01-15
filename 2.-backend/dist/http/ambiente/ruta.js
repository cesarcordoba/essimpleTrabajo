"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class AmbienteRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.AmbienteController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/ambiente')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/ambiente/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/ambiente/paginacion')
            .post(this.controlador.paginacion);
        this._rutas.route('/data/ambiente/xCuarto/:id')
            .get(this.controlador.xcuarto);
        this._rutas.route('/data/ambiente/Cuarto/:id')
            .get(this.controlador.cuarto);
        //*
        this._rutas.route('/data/ambiente/espacios/:id')
            .get(this.controlador.espacios);
        //*
        this._rutas.route('/data/ambiente-espacio/:ambiente/:espacio')
            .put(this.controlador.ligarespacios)
            .delete(this.controlador.desligarespacios);
        //*
        this._rutas.route('/data/ambiente/Productos/:id')
            .get(this.controlador.productos);
        //*
        this._rutas.route('/data/ambiente-producto/:ambiente/:producto')
            .put(this.controlador.ligarproductos)
            .delete(this.controlador.desligarproductos);
    }
    rutas() {
        return this._rutas;
    }
}
exports.AmbienteRouter = AmbienteRouter;
