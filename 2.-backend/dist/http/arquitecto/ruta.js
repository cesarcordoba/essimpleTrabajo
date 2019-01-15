"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class ArquitectoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.ArquitectoController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/arquitecto')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/arquitecto/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/arquitecto/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/arquitecto/contratistas/:id')
            .get(this.controlador.contratistas);
        //*
        this._rutas.route('/data/arquitecto-contratista/:arquitecto/:contratista')
            .put(this.controlador.ligarcontratistas)
            .delete(this.controlador.desligarcontratistas);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ArquitectoRouter = ArquitectoRouter;
