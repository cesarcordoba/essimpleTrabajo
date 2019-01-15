"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class ImagenRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.ImagenController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/imagen')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/imagen/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/imagen/paginacion')
            .post(this.controlador.paginacion);
        this._rutas.route('/data/imagen/xProducto/:id')
            .get(this.controlador.xproducto);
        this._rutas.route('/data/imagen/Producto/:id')
            .get(this.controlador.producto);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ImagenRouter = ImagenRouter;
