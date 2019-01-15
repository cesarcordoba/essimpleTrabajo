"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class InventarioController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Inventario.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearInventario'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Inventario.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarInventario'))
            :
                modelo_1.Inventario.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarInventario'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Inventario.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarInventario'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Inventario.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarInventario'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Inventario.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionInventario'));
        //* 24
        this.precios = (req, res, next) => modelo_1.Inventario.findById(req.params.id)
            .then(item => item.$get('Precios'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Inventarioprecios'));
        //* 24
        this.ligarprecios = (req, res, next) => modelo_1.Inventario.findById(req.params.inventario)
            .then(item => item.$add('Precios', req.params.precio))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarInventarioprecios'));
        //* 24
        this.desligarprecios = (req, res, next) => modelo_1.Inventario.findById(req.params.inventario)
            .then(item => item.$remove('Precios', req.params.precio))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarInventarioprecios'));
        //* 26
        this.existencias = (req, res, next) => modelo_1.Inventario.findById(req.params.id)
            .then(item => item.$get('Existencias'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Inventarioexistencias'));
        //* 26
        this.ligarexistencias = (req, res, next) => modelo_1.Inventario.findById(req.params.inventario)
            .then(item => item.$add('Existencias', req.params.existencia))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarInventarioexistencias'));
        //* 26
        this.desligarexistencias = (req, res, next) => modelo_1.Inventario.findById(req.params.inventario)
            .then(item => item.$remove('Existencias', req.params.existencia))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarInventarioexistencias'));
    }
}
exports.InventarioController = InventarioController;
