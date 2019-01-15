"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class InversionistaRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.InversionistaController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/inversionista')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/inversionista/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/inversionista/paginacion')
            .post(this.controlador.paginacion);
    }
    rutas() {
        return this._rutas;
    }
}
exports.InversionistaRouter = InversionistaRouter;
