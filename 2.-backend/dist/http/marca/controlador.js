"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disponibles = require('./disponibles/disponibles');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class MarcaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Marca.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearMarca'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Marca.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarMarca'))
            :
                modelo_1.Marca.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarMarca'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Marca.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarMarca'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Marca.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarMarca'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Marca.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionMarca'));
        //* 1
        this.productos = (req, res, next) => modelo_1.Marca.findById(req.params.id)
            .then(item => item.$get('Productos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Marcaproductos'));
        //* 1
        this.ligarproductos = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$add('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarMarcaproductos'));
        //* 1
        this.desligarproductos = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$remove('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarMarcaproductos'));
        //* 13
        this.gamas = (req, res, next) => modelo_1.Marca.findById(req.params.id)
            .then(item => item.$get('Gamas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Marcagamas'));
        //* 13
        this.ligargamas = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$add('Gamas', req.params.gama))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarMarcagamas'));
        //* 13
        this.desligargamas = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$remove('Gamas', req.params.gama))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarMarcagamas'));
        //* 14
        this.lineas = (req, res, next) => modelo_1.Marca.findById(req.params.id)
            .then(item => item.$get('Lineas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Marcalineas'));
        //* 14
        this.ligarlineas = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$add('Lineas', req.params.linea))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarMarcalineas'));
        //* 14
        this.desligarlineas = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$remove('Lineas', req.params.linea))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarMarcalineas'));
        //* 15
        this.margenes = (req, res, next) => modelo_1.Marca.findById(req.params.id)
            .then(item => item.$get('Margenes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Marcamargenes'));
        //* 15
        this.ligarmargenes = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$add('Margenes', req.params.margen))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarMarcamargenes'));
        //* 15
        this.desligarmargenes = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$remove('Margenes', req.params.margen))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarMarcamargenes'));
        //* 16
        this.catalogos = (req, res, next) => modelo_1.Marca.findById(req.params.id)
            .then(item => item.$get('Catalogos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Marcacatalogos'));
        //* 16
        this.ligarcatalogos = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$add('Catalogos', req.params.catalogo))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarMarcacatalogos'));
        //* 16
        this.desligarcatalogos = (req, res, next) => modelo_1.Marca.findById(req.params.marca)
            .then(item => item.$remove('Catalogos', req.params.catalogo))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarMarcacatalogos'));
        this.disponibles = (req, res, next) => disponibles(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Marca_disponibles'));
    }
}
exports.MarcaController = MarcaController;
