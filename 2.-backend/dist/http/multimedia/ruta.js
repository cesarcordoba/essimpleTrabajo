"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class MultimediaRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.MultimediaController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/multimedia')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/multimedia/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/multimedia/paginacion')
            .post(this.controlador.paginacion);
        this._rutas.route('/data/multimedia/fotoPerfil/:id')
            .get(this.controlador.fotoPerfil);
        this._rutas.route('/data/multimedia/xProyecto/:id')
            .get(this.controlador.xproyecto);
        this._rutas.route('/data/multimedia/Proyecto/:id')
            .get(this.controlador.proyecto);
    }
    rutas() {
        return this._rutas;
    }
}
exports.MultimediaRouter = MultimediaRouter;
