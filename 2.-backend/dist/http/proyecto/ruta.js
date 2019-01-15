"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class ProyectoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.ProyectoController();
        this.init();
    }
    init() {
        this._rutas.route('/data/proyecto/froala')
            .get(this.controlador.froala);
        //*
        this._rutas.route('/data/proyecto')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/proyecto/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/proyecto/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/proyecto/portadas/:id')
            .get(this.controlador.portadas);
        //*
        this._rutas.route('/data/proyecto-portada/:proyecto/:portada')
            .put(this.controlador.ligarportadas)
            .delete(this.controlador.desligarportadas);
        //*
        this._rutas.route('/data/proyecto/multimedias/:id')
            .get(this.controlador.multimedias);
        //*
        this._rutas.route('/data/proyecto-multimedia/:proyecto/:multimedia')
            .put(this.controlador.ligarmultimedias)
            .delete(this.controlador.desligarmultimedias);
        //*
        this._rutas.route('/data/proyecto/Inversionistas/:id')
            .get(this.controlador.inversionistas);
        //*
        this._rutas.route('/data/proyecto-usuario/:proyecto/:usuario')
            .put(this.controlador.ligarinversionistas)
            .delete(this.controlador.desligarinversionistas);
        //*
        this._rutas.route('/data/proyecto/Contratistas/:id')
            .get(this.controlador.contratistas);
        //*
        this._rutas.route('/data/proyecto-usuario/:proyecto/:usuario')
            .put(this.controlador.ligarcontratistas)
            .delete(this.controlador.desligarcontratistas);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ProyectoRouter = ProyectoRouter;
