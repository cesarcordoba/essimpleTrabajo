"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class CuartoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.CuartoController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/cuarto')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/cuarto/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/cuarto/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/cuarto/ambientes/:id')
            .get(this.controlador.ambientes);
        //*
        this._rutas.route('/data/cuarto-ambiente/:cuarto/:ambiente')
            .put(this.controlador.ligarambientes)
            .delete(this.controlador.desligarambientes);
    }
    rutas() {
        return this._rutas;
    }
}
exports.CuartoRouter = CuartoRouter;
