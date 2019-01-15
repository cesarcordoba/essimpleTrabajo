"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class AvatarController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Avatar.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearAvatar'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Avatar.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarAvatar'))
            :
                modelo_1.Avatar.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarAvatar'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Avatar.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarAvatar'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Avatar.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarAvatar'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Avatar.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionAvatar'));
        //* 31
        this.xusuario = (req, res, next) => modelo_1.Avatar.findAll({ where: { 'IdUsuario': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xAvatarusuarios'));
        //* 31
        this.usuario = (req, res, next) => modelo_1.Avatar.findById(req.params.id)
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Avatarusuarios'));
    }
}
exports.AvatarController = AvatarController;
