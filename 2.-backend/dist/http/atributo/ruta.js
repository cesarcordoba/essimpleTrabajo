"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class AtributoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.AtributoController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/atributo')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/atributo/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/atributo/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/atributo/categorias/:id')
            .get(this.controlador.categorias);
        //*
        this._rutas.route('/data/atributo-categoria/:atributo/:categoria')
            .put(this.controlador.ligarcategorias)
            .delete(this.controlador.desligarcategorias);
        //*
        this._rutas.route('/data/atributo/opciones/:id')
            .get(this.controlador.opciones);
        //*
        this._rutas.route('/data/atributo-opcion/:atributo/:opcion')
            .put(this.controlador.ligaropciones)
            .delete(this.controlador.desligaropciones);
    }
    rutas() {
        return this._rutas;
    }
}
exports.AtributoRouter = AtributoRouter;
