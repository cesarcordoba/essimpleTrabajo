"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class ContratistaRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.ContratistaController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/contratista')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/contratista/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/contratista/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/contratista/arquitectos/:id')
            .get(this.controlador.arquitectos);
        //*
        this._rutas.route('/data/contratista-arquitecto/:contratista/:arquitecto')
            .put(this.controlador.ligararquitectos)
            .delete(this.controlador.desligararquitectos);
        //*
        this._rutas.route('/data/contratista/constructoras/:id')
            .get(this.controlador.constructoras);
        //*
        this._rutas.route('/data/contratista-constructora/:contratista/:constructora')
            .put(this.controlador.ligarconstructoras)
            .delete(this.controlador.desligarconstructoras);
        //* Ruta agregada manualmente
        this._rutas.route('/data/contratista-usuario/contratista/:id')
            .get(this.controlador.obtenerInfo);
        this._rutas.route('/data/agregarProyecto/:id')
            .put(this.controlador.agregarProyecto);
        // this._rutas.route('/data/obtenerDatos/:id')
        //     .get(this.controlador.obtenerDatos);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ContratistaRouter = ContratistaRouter;
