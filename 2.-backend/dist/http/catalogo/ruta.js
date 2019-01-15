"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class CatalogoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.CatalogoController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/catalogo')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/catalogo/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/catalogo/paginacion')
            .post(this.controlador.paginacion);
        this._rutas.route('/data/catalogo/xMarca/:id')
            .get(this.controlador.xmarca);
        this._rutas.route('/data/catalogo/Marca/:id')
            .get(this.controlador.marca);
    }
    rutas() {
        return this._rutas;
    }
}
exports.CatalogoRouter = CatalogoRouter;
