"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class PortadaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Portada.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearPortada'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Portada.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarPortada'))
            :
                modelo_1.Portada.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarPortada'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Portada.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarPortada'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Portada.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarPortada'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Portada.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionPortada'));
        //* 1
        this.xproyecto = (req, res, next) => modelo_1.Portada.findAll({ where: { 'IdProyecto': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xPortadaproyectos'));
        //* 1
        this.proyecto = (req, res, next) => modelo_1.Portada.findById(req.params.id)
            .then(item => item.$get('Proyecto'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Portadaproyectos'));
    }
}
exports.PortadaController = PortadaController;
