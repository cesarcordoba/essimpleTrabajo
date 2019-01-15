"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class MargenRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.MargenController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/margen')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/margen/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/margen/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/margen/productos/:id')
            .get(this.controlador.productos);
        //*
        this._rutas.route('/data/margen-producto/:margen/:producto')
            .put(this.controlador.ligarproductos)
            .delete(this.controlador.desligarproductos);
        this._rutas.route('/data/margen/xMarca/:id')
            .get(this.controlador.xmarca);
        this._rutas.route('/data/margen/Marca/:id')
            .get(this.controlador.marca);
    }
    rutas() {
        return this._rutas;
    }
}
exports.MargenRouter = MargenRouter;
