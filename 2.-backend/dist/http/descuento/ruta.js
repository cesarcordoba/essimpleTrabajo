"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class DescuentoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.DescuentoController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/descuento')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/descuento/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/descuento/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/descuento/versiones/:id')
            .get(this.controlador.versiones);
        //*
        this._rutas.route('/data/descuento-version/:descuento/:version')
            .put(this.controlador.ligarversiones)
            .delete(this.controlador.desligarversiones);
        this._rutas.route('/data/descuento/xPromo/:id')
            .get(this.controlador.xpromo);
        this._rutas.route('/data/descuento/Promo/:id')
            .get(this.controlador.promo);
    }
    rutas() {
        return this._rutas;
    }
}
exports.DescuentoRouter = DescuentoRouter;
