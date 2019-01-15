"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class EspacioRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.EspacioController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/espacio')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/espacio/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/espacio/paginacion')
            .post(this.controlador.paginacion);
        this._rutas.route('/data/espacio/xAmbiente/:id')
            .get(this.controlador.xambiente);
        this._rutas.route('/data/espacio/Ambiente/:id')
            .get(this.controlador.ambiente);
    }
    rutas() {
        return this._rutas;
    }
}
exports.EspacioRouter = EspacioRouter;
