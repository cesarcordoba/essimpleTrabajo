"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class ProductoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.ProductoController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/producto')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/producto/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/producto/paginacion')
            .post(this.controlador.paginacion);
        this._rutas.route('/data/producto/xCategoria/:id')
            .get(this.controlador.xcategoria);
        this._rutas.route('/data/producto/Categoria/:id')
            .get(this.controlador.categoria);
        //*
        this._rutas.route('/data/producto/colores/:id')
            .get(this.controlador.colores);
        //*
        this._rutas.route('/data/producto-color/:producto/:color')
            .put(this.controlador.ligarcolores)
            .delete(this.controlador.desligarcolores);
        //*
        this._rutas.route('/data/producto/imagenes/:id')
            .get(this.controlador.imagenes);
        //*
        this._rutas.route('/data/producto-imagen/:producto/:imagen')
            .put(this.controlador.ligarimagenes)
            .delete(this.controlador.desligarimagenes);
        //*
        this._rutas.route('/data/producto/portadas/:id')
            .get(this.controlador.portadas);
        //*
        this._rutas.route('/data/producto-portada/:producto/:portada')
            .put(this.controlador.ligarportadas)
            .delete(this.controlador.desligarportadas);
        //*
        this._rutas.route('/data/producto/versiones/:id')
            .get(this.controlador.versiones);
        //*
        this._rutas.route('/data/producto-version/:producto/:version')
            .put(this.controlador.ligarversiones)
            .delete(this.controlador.desligarversiones);
        this._rutas.route('/data/producto/xMarca/:id')
            .get(this.controlador.xmarca);
        this._rutas.route('/data/producto/Marca/:id')
            .get(this.controlador.marca);
        this._rutas.route('/data/producto/xGama/:id')
            .get(this.controlador.xgama);
        this._rutas.route('/data/producto/Gama/:id')
            .get(this.controlador.gama);
        this._rutas.route('/data/producto/xLinea/:id')
            .get(this.controlador.xlinea);
        this._rutas.route('/data/producto/Linea/:id')
            .get(this.controlador.linea);
        //*
        this._rutas.route('/data/producto/margenes/:id')
            .get(this.controlador.margenes);
        //*
        this._rutas.route('/data/producto-margen/:producto/:margen')
            .put(this.controlador.ligarmargenes)
            .delete(this.controlador.desligarmargenes);
        //*
        this._rutas.route('/data/producto/Promos/:id')
            .get(this.controlador.promos);
        //*
        this._rutas.route('/data/producto-promo/:producto/:promo')
            .put(this.controlador.ligarpromos)
            .delete(this.controlador.desligarpromos);
        //*
        this._rutas.route('/data/producto/Ambientes/:id')
            .get(this.controlador.ambientes);
        //*
        this._rutas.route('/data/producto-ambiente/:producto/:ambiente')
            .put(this.controlador.ligarambientes)
            .delete(this.controlador.desligarambientes);
        this._rutas.route('/data/producto_filtro')
            .put(this.controlador.filtro);
        this._rutas.route('/data/producto_versionesdisponibles/:id')
            .get(this.controlador.versionesdisponibles);
        this._rutas.route('/data/producto_xNombre')
            .put(this.controlador.xNombre);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ProductoRouter = ProductoRouter;
