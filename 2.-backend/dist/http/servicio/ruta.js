"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class ServicioRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.ServicioController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/servicio')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/servicio/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/servicio/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/servicio/Cantidades/:id')
            .get(this.controlador.cantidades);
        //*
        this._rutas.route('/data/servicio-proyecto/:servicio/:proyecto')
            .put(this.controlador.ligarcantidades)
            .delete(this.controlador.desligarcantidades);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ServicioRouter = ServicioRouter;
