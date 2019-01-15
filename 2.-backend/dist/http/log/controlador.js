"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class LogController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Log.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearLog'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Log.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarLog'))
            :
                modelo_1.Log.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarLog'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Log.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarLog'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Log.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarLog'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Log.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionLog'));
        //* 31
        this.xusuario = (req, res, next) => modelo_1.Log.findAll({ where: { 'IdUsuario': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xLogusuarios'));
        //* 31
        this.usuario = (req, res, next) => modelo_1.Log.findById(req.params.id)
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Logusuarios'));
    }
}
exports.LogController = LogController;
