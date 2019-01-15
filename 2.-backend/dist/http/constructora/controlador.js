"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class ConstructoraController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Constructora.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearConstructora'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Constructora.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarConstructora'))
            :
                modelo_1.Constructora.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarConstructora'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Constructora.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarConstructora'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Constructora.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarConstructora'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Constructora.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionConstructora'));
        //* 8
        this.contratistas = (req, res, next) => modelo_1.Constructora.findById(req.params.id)
            .then(item => item.$get('Contratistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Constructoracontratistas'));
        //* 8
        this.ligarcontratistas = (req, res, next) => modelo_1.Constructora.findById(req.params.constructora)
            .then(item => item.$add('Contratistas', req.params.contratista))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarConstructoracontratistas'));
        //* 8
        this.desligarcontratistas = (req, res, next) => modelo_1.Constructora.findById(req.params.constructora)
            .then(item => item.$remove('Contratistas', req.params.contratista))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarConstructoracontratistas'));
    }
}
exports.ConstructoraController = ConstructoraController;
