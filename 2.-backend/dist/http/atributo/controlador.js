"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class AtributoController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Atributo.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearAtributo'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Atributo.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarAtributo'))
            :
                modelo_1.Atributo.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarAtributo'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Atributo.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarAtributo'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Atributo.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarAtributo'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Atributo.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionAtributo'));
        //* 2
        this.categorias = (req, res, next) => modelo_1.Atributo.findById(req.params.id)
            .then(item => item.$get('Categorias'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Atributocategorias'));
        //* 2
        this.ligarcategorias = (req, res, next) => modelo_1.Atributo.findById(req.params.atributo)
            .then(item => item.$add('Categorias', req.params.categoria))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarAtributocategorias'));
        //* 2
        this.desligarcategorias = (req, res, next) => modelo_1.Atributo.findById(req.params.atributo)
            .then(item => item.$remove('Categorias', req.params.categoria))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarAtributocategorias'));
        //* 11
        this.opciones = (req, res, next) => modelo_1.Atributo.findById(req.params.id)
            .then(item => item.$get('Opciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Atributoopciones'));
        //* 11
        this.ligaropciones = (req, res, next) => modelo_1.Atributo.findById(req.params.atributo)
            .then(item => item.$add('Opciones', req.params.opcion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarAtributoopciones'));
        //* 11
        this.desligaropciones = (req, res, next) => modelo_1.Atributo.findById(req.params.atributo)
            .then(item => item.$remove('Opciones', req.params.opcion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarAtributoopciones'));
    }
}
exports.AtributoController = AtributoController;
