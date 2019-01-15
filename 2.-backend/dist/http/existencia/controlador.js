"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class ExistenciaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Existencia.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearExistencia'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Existencia.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarExistencia'))
            :
                modelo_1.Existencia.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarExistencia'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Existencia.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarExistencia'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Existencia.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarExistencia'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Existencia.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionExistencia'));
        //* 23
        this.inventarios = (req, res, next) => modelo_1.Existencia.findById(req.params.id)
            .then(item => item.$get('Inventarios'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Existenciainventarios'));
        //* 23
        this.ligarinventarios = (req, res, next) => modelo_1.Existencia.findById(req.params.existencia)
            .then(item => item.$add('Inventarios', req.params.inventario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarExistenciainventarios'));
        //* 23
        this.desligarinventarios = (req, res, next) => modelo_1.Existencia.findById(req.params.existencia)
            .then(item => item.$remove('Inventarios', req.params.inventario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarExistenciainventarios'));
    }
}
exports.ExistenciaController = ExistenciaController;
