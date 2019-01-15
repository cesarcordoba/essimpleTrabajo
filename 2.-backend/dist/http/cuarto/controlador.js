"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class CuartoController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Cuarto.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearCuarto'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Cuarto.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarCuarto'))
            :
                modelo_1.Cuarto.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarCuarto'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Cuarto.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarCuarto'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Cuarto.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarCuarto'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Cuarto.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionCuarto'));
        //* 27
        this.ambientes = (req, res, next) => modelo_1.Cuarto.findById(req.params.id)
            .then(item => item.$get('Ambientes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Cuartoambientes'));
        //* 27
        this.ligarambientes = (req, res, next) => modelo_1.Cuarto.findById(req.params.cuarto)
            .then(item => item.$add('Ambientes', req.params.ambiente))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarCuartoambientes'));
        //* 27
        this.desligarambientes = (req, res, next) => modelo_1.Cuarto.findById(req.params.cuarto)
            .then(item => item.$remove('Ambientes', req.params.ambiente))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarCuartoambientes'));
    }
}
exports.CuartoController = CuartoController;
