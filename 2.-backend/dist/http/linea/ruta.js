"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class LineaRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.LineaController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/linea')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/linea/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/linea/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/linea/productos/:id')
            .get(this.controlador.productos);
        //*
        this._rutas.route('/data/linea-producto/:linea/:producto')
            .put(this.controlador.ligarproductos)
            .delete(this.controlador.desligarproductos);
        this._rutas.route('/data/linea/xMarca/:id')
            .get(this.controlador.xmarca);
        this._rutas.route('/data/linea/Marca/:id')
            .get(this.controlador.marca);
    }
    rutas() {
        return this._rutas;
    }
}
exports.LineaRouter = LineaRouter;
