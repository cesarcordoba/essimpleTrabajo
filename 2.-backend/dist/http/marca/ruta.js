"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class MarcaRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.MarcaController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/marca')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/marca/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/marca/paginacion')
            .post(this.controlador.paginacion);
        //*
        this._rutas.route('/data/marca/productos/:id')
            .get(this.controlador.productos);
        //*
        this._rutas.route('/data/marca-producto/:marca/:producto')
            .put(this.controlador.ligarproductos)
            .delete(this.controlador.desligarproductos);
        //*
        this._rutas.route('/data/marca/gamas/:id')
            .get(this.controlador.gamas);
        //*
        this._rutas.route('/data/marca-gama/:marca/:gama')
            .put(this.controlador.ligargamas)
            .delete(this.controlador.desligargamas);
        //*
        this._rutas.route('/data/marca/lineas/:id')
            .get(this.controlador.lineas);
        //*
        this._rutas.route('/data/marca-linea/:marca/:linea')
            .put(this.controlador.ligarlineas)
            .delete(this.controlador.desligarlineas);
        //*
        this._rutas.route('/data/marca/margenes/:id')
            .get(this.controlador.margenes);
        //*
        this._rutas.route('/data/marca-margen/:marca/:margen')
            .put(this.controlador.ligarmargenes)
            .delete(this.controlador.desligarmargenes);
        //*
        this._rutas.route('/data/marca/catalogos/:id')
            .get(this.controlador.catalogos);
        //*
        this._rutas.route('/data/marca-catalogo/:marca/:catalogo')
            .put(this.controlador.ligarcatalogos)
            .delete(this.controlador.desligarcatalogos);
        this._rutas.route('/data/marca_disponibles')
            .get(this.controlador.disponibles);
    }
    rutas() {
        return this._rutas;
    }
}
exports.MarcaRouter = MarcaRouter;
