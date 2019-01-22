"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class ServicioController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Servicio.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearServicio'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Servicio.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarServicio'))
            :
                modelo_1.Servicio.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarServicio'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Servicio.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarServicio'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Servicio.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarServicio'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Servicio.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionServicio'));
        //* null
        this.cantidades = (req, res, next) => modelo_1.Servicio.findById(req.params.id)
            .then(item => item.$get('Cantidades'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ServicioCantidades'));
        //* null
        this.ligarcantidades = (req, res, next) => modelo_1.Servicio.findById(req.params.servicio)
            .then(item => item.$add('Cantidades', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioCantidades'));
        //* null
        this.desligarcantidades = (req, res, next) => modelo_1.Servicio.findById(req.params.servicio)
            .then(item => item.$remove('Cantidades', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioCantidades'));
    }
}
exports.ServicioController = ServicioController;
