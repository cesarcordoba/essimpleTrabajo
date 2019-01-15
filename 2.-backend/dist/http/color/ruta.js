"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class ColorRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.ColorController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/color')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/color/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/color/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/color/productos/:id')
            .get(this.controlador.productos);
        //*
        this._rutas.route('/data/color-producto/:color/:producto')
            .put(this.controlador.ligarproductos)
            .delete(this.controlador.desligarproductos);
        this._rutas.route('/data/color_disponibles')
            .get(this.controlador.disponibles);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ColorRouter = ColorRouter;
