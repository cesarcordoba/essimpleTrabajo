"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class OpcionRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.OpcionController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/opcion')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/opcion/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/opcion/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/opcion/versiones/:id')
            .get(this.controlador.versiones);
        //*
        this._rutas.route('/data/opcion-version/:opcion/:version')
            .put(this.controlador.ligarversiones)
            .delete(this.controlador.desligarversiones);
        this._rutas.route('/data/opcion/xAtributo/:id')
            .get(this.controlador.xatributo);
        this._rutas.route('/data/opcion/Atributo/:id')
            .get(this.controlador.atributo);
    }
    rutas() {
        return this._rutas;
    }
}
exports.OpcionRouter = OpcionRouter;
