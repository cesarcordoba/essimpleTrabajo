"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class MultimediaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Multimedia.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearMultimedia'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Multimedia.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarMultimedia'))
            :
                modelo_1.Multimedia.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarMultimedia'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Multimedia.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarMultimedia'));
        //-NUEVA-
        this.fotoPerfil = (req, res, next) => modelo_1.Multimedia.findAll({ where: { tipo: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'fotoPerfilMultimedia'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Multimedia.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarMultimedia'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Multimedia.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionMultimedia'));
        //* 1
        this.xproyecto = (req, res, next) => modelo_1.Multimedia.findAll({ where: { 'IdProyecto': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xMultimediaproyectos'));
        //* 1
        this.proyecto = (req, res, next) => modelo_1.Multimedia.findById(req.params.id)
            .then(item => item.$get('Proyecto'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Multimediaproyectos'));
    }
}
exports.MultimediaController = MultimediaController;
