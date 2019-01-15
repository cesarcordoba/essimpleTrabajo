"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class GamaRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.GamaController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/gama')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/gama/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/gama/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/gama/productos/:id')
            .get(this.controlador.productos);
        //*
        this._rutas.route('/data/gama-producto/:gama/:producto')
            .put(this.controlador.ligarproductos)
            .delete(this.controlador.desligarproductos);
        this._rutas.route('/data/gama/xMarca/:id')
            .get(this.controlador.xmarca);
        this._rutas.route('/data/gama/Marca/:id')
            .get(this.controlador.marca);
        this._rutas.route('/data/gama_ambientes/:id')
            .get(this.controlador.ambientes);
    }
    rutas() {
        return this._rutas;
    }
}
exports.GamaRouter = GamaRouter;
