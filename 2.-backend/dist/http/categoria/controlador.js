"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ultimoproducto = require('./ultimoproducto/ultimoproducto');
const nivel = require('./nivel/nivel');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class CategoriaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Categoria.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearCategoria'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Categoria.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarCategoria'))
            :
                modelo_1.Categoria.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarCategoria'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Categoria.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarCategoria'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Categoria.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarCategoria'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Categoria.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionCategoria'));
        //* 1
        this.productos = (req, res, next) => modelo_1.Categoria.findById(req.params.id)
            .then(item => item.$get('Productos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Categoriaproductos'));
        //* 1
        this.ligarproductos = (req, res, next) => modelo_1.Categoria.findById(req.params.categoria)
            .then(item => item.$add('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarCategoriaproductos'));
        //* 1
        this.desligarproductos = (req, res, next) => modelo_1.Categoria.findById(req.params.categoria)
            .then(item => item.$remove('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarCategoriaproductos'));
        //* 2
        this.subcategorias = (req, res, next) => modelo_1.Categoria.findById(req.params.id)
            .then(item => item.$get('SubCategorias'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'subCategoriacategorias'));
        //* 2
        this.precategorias = (req, res, next) => modelo_1.Categoria.findById(req.params.id)
            .then(item => item.$get('PreCategorias'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'preCategoriacategorias'));
        //* 10
        this.atributos = (req, res, next) => modelo_1.Categoria.findById(req.params.id)
            .then(item => item.$get('Atributos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Categoriaatributos'));
        //* 10
        this.ligaratributos = (req, res, next) => modelo_1.Categoria.findById(req.params.categoria)
            .then(item => item.$add('Atributos', req.params.atributo))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarCategoriaatributos'));
        //* 10
        this.desligaratributos = (req, res, next) => modelo_1.Categoria.findById(req.params.categoria)
            .then(item => item.$remove('Atributos', req.params.atributo))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarCategoriaatributos'));
        this.ultimoproducto = (req, res, next) => ultimoproducto(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Categoria_ultimoproducto'));
        this.nivel = (req, res, next) => nivel(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Categoria_nivel'));
    }
}
exports.CategoriaController = CategoriaController;
