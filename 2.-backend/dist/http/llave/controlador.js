"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class LlaveController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Llave.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearLlave'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Llave.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarLlave'))
            :
                modelo_1.Llave.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarLlave'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Llave.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarLlave'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Llave.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarLlave'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Llave.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionLlave'));
        //* 6
        this.xusuario = (req, res, next) => modelo_1.Llave.findAll({ where: { 'IdUsuario': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xLlaveusuarios'));
        //* 6
        this.usuario = (req, res, next) => modelo_1.Llave.findById(req.params.id)
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Llaveusuarios'));
    }
}
exports.LlaveController = LlaveController;
