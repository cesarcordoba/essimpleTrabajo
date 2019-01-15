"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class ConstructoraRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.ConstructoraController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/constructora')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/constructora/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/constructora/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/constructora/contratistas/:id')
            .get(this.controlador.contratistas);
        //*
        this._rutas.route('/data/constructora-contratista/:constructora/:contratista')
            .put(this.controlador.ligarcontratistas)
            .delete(this.controlador.desligarcontratistas);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ConstructoraRouter = ConstructoraRouter;
