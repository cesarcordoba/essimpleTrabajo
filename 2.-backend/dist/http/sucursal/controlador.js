"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class SucursalController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Sucursal.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearSucursal'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Sucursal.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarSucursal'))
            :
                modelo_1.Sucursal.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarSucursal'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Sucursal.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarSucursal'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Sucursal.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarSucursal'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Sucursal.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionSucursal'));
        //* 23
        this.versiones = (req, res, next) => modelo_1.Sucursal.findById(req.params.id)
            .then(item => item.$get('Versiones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'SucursalVersiones'));
        //* 23
        this.ligarversiones = (req, res, next) => modelo_1.Sucursal.findById(req.params.sucursal)
            .then(item => item.$add('Versiones', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarSucursalVersiones'));
        //* 23
        this.desligarversiones = (req, res, next) => modelo_1.Sucursal.findById(req.params.sucursal)
            .then(item => item.$remove('Versiones', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarSucursalVersiones'));
    }
}
exports.SucursalController = SucursalController;
