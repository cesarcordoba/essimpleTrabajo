"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class SucursalRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.SucursalController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/sucursal')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/sucursal/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/sucursal/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/sucursal/Versiones/:id')
            .get(this.controlador.versiones);
        //*
        this._rutas.route('/data/sucursal-version/:sucursal/:version')
            .put(this.controlador.ligarversiones)
            .delete(this.controlador.desligarversiones);
    }
    rutas() {
        return this._rutas;
    }
}
exports.SucursalRouter = SucursalRouter;
