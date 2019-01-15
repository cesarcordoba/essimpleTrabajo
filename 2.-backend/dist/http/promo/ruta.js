"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class PromoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.PromoController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/promo')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/promo/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/promo/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/promo/descuentos/:id')
            .get(this.controlador.descuentos);
        //*
        this._rutas.route('/data/promo-descuento/:promo/:descuento')
            .put(this.controlador.ligardescuentos)
            .delete(this.controlador.desligardescuentos);
        //*
        this._rutas.route('/data/promo/ofertas/:id')
            .get(this.controlador.ofertas);
        //*
        this._rutas.route('/data/promo-oferta/:promo/:oferta')
            .put(this.controlador.ligarofertas)
            .delete(this.controlador.desligarofertas);
        //*
        this._rutas.route('/data/promo/Productos/:id')
            .get(this.controlador.productos);
        //*
        this._rutas.route('/data/promo-producto/:promo/:producto')
            .put(this.controlador.ligarproductos)
            .delete(this.controlador.desligarproductos);
    }
    rutas() {
        return this._rutas;
    }
}
exports.PromoRouter = PromoRouter;
