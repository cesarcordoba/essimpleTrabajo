"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disponibles = require('./disponibles/disponibles');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class ColorController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Color.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearColor'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Color.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarColor'))
            :
                modelo_1.Color.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarColor'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Color.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarColor'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Color.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarColor'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Color.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionColor'));
        //* 1
        this.productos = (req, res, next) => modelo_1.Color.findById(req.params.id)
            .then(item => item.$get('Productos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Colorproductos'));
        //* 1
        this.ligarproductos = (req, res, next) => modelo_1.Color.findById(req.params.color)
            .then(item => item.$add('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarColorproductos'));
        //* 1
        this.desligarproductos = (req, res, next) => modelo_1.Color.findById(req.params.color)
            .then(item => item.$remove('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarColorproductos'));
        this.disponibles = (req, res, next) => disponibles(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Color_disponibles'));
    }
}
exports.ColorController = ColorController;
