"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class OpcionController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Opcion.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearOpcion'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Opcion.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarOpcion'))
            :
                modelo_1.Opcion.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarOpcion'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Opcion.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarOpcion'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Opcion.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarOpcion'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Opcion.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionOpcion'));
        //* 9
        this.versiones = (req, res, next) => modelo_1.Opcion.findById(req.params.id)
            .then(item => item.$get('Versiones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Opcionversiones'));
        //* 9
        this.ligarversiones = (req, res, next) => modelo_1.Opcion.findById(req.params.opcion)
            .then(item => item.$add('Versiones', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarOpcionversiones'));
        //* 9
        this.desligarversiones = (req, res, next) => modelo_1.Opcion.findById(req.params.opcion)
            .then(item => item.$remove('Versiones', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarOpcionversiones'));
        //* 10
        this.xatributo = (req, res, next) => modelo_1.Opcion.findAll({ where: { 'IdAtributo': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xOpcionatributos'));
        //* 10
        this.atributo = (req, res, next) => modelo_1.Opcion.findById(req.params.id)
            .then(item => item.$get('Atributo'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Opcionatributos'));
    }
}
exports.OpcionController = OpcionController;
