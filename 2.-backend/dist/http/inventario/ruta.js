"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class InventarioRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.InventarioController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/inventario')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/inventario/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/inventario/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/inventario/precios/:id')
            .get(this.controlador.precios);
        //*
        this._rutas.route('/data/inventario-precio/:inventario/:precio')
            .put(this.controlador.ligarprecios)
            .delete(this.controlador.desligarprecios);
        //*
        this._rutas.route('/data/inventario/existencias/:id')
            .get(this.controlador.existencias);
        //*
        this._rutas.route('/data/inventario-existencia/:inventario/:existencia')
            .put(this.controlador.ligarexistencias)
            .delete(this.controlador.desligarexistencias);
    }
    rutas() {
        return this._rutas;
    }
}
exports.InventarioRouter = InventarioRouter;
