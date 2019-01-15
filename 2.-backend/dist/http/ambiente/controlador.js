"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class AmbienteController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Ambiente.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearAmbiente'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Ambiente.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarAmbiente'))
            :
                modelo_1.Ambiente.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarAmbiente'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Ambiente.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarAmbiente'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Ambiente.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarAmbiente'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Ambiente.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionAmbiente'));
        //* 29
        this.xcuarto = (req, res, next) => modelo_1.Ambiente.findAll({ where: { 'IdCuarto': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xAmbientecuartos'));
        //* 29
        this.cuarto = (req, res, next) => modelo_1.Ambiente.findById(req.params.id)
            .then(item => item.$get('Cuarto'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Ambientecuartos'));
        //* 30
        this.espacios = (req, res, next) => modelo_1.Ambiente.findById(req.params.id)
            .then(item => item.$get('Espacios'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Ambienteespacios'));
        //* 30
        this.ligarespacios = (req, res, next) => modelo_1.Ambiente.findById(req.params.ambiente)
            .then(item => item.$add('Espacios', req.params.espacio))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarAmbienteespacios'));
        //* 30
        this.desligarespacios = (req, res, next) => modelo_1.Ambiente.findById(req.params.ambiente)
            .then(item => item.$remove('Espacios', req.params.espacio))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarAmbienteespacios'));
        //* 28
        this.productos = (req, res, next) => modelo_1.Ambiente.findById(req.params.id)
            .then(item => item.$get('Productos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'AmbienteProductos'));
        //* 28
        this.ligarproductos = (req, res, next) => modelo_1.Ambiente.findById(req.params.ambiente)
            .then(item => item.$add('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarAmbienteProductos'));
        //* 28
        this.desligarproductos = (req, res, next) => modelo_1.Ambiente.findById(req.params.ambiente)
            .then(item => item.$remove('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarAmbienteProductos'));
    }
}
exports.AmbienteController = AmbienteController;
