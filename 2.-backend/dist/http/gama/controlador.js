"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ambientes = require('./ambientes/ambientes');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class GamaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Gama.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearGama'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Gama.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarGama'))
            :
                modelo_1.Gama.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarGama'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Gama.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarGama'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Gama.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarGama'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Gama.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionGama'));
        //* 1
        this.productos = (req, res, next) => modelo_1.Gama.findById(req.params.id)
            .then(item => item.$get('Productos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Gamaproductos'));
        //* 1
        this.ligarproductos = (req, res, next) => modelo_1.Gama.findById(req.params.gama)
            .then(item => item.$add('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarGamaproductos'));
        //* 1
        this.desligarproductos = (req, res, next) => modelo_1.Gama.findById(req.params.gama)
            .then(item => item.$remove('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarGamaproductos'));
        //* 12
        this.xmarca = (req, res, next) => modelo_1.Gama.findAll({ where: { 'IdMarca': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xGamamarcas'));
        //* 12
        this.marca = (req, res, next) => modelo_1.Gama.findById(req.params.id)
            .then(item => item.$get('Marca'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Gamamarcas'));
        this.ambientes = (req, res, next) => ambientes(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Gama_ambientes'));
    }
}
exports.GamaController = GamaController;
