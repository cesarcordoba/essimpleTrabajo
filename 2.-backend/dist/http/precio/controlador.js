"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class PrecioController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Precio.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearPrecio'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Precio.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarPrecio'))
            :
                modelo_1.Precio.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarPrecio'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Precio.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarPrecio'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Precio.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarPrecio'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Precio.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionPrecio'));
        //* 23
        this.inventarios = (req, res, next) => modelo_1.Precio.findById(req.params.id)
            .then(item => item.$get('Inventarios'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Precioinventarios'));
        //* 23
        this.ligarinventarios = (req, res, next) => modelo_1.Precio.findById(req.params.precio)
            .then(item => item.$add('Inventarios', req.params.inventario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarPrecioinventarios'));
        //* 23
        this.desligarinventarios = (req, res, next) => modelo_1.Precio.findById(req.params.precio)
            .then(item => item.$remove('Inventarios', req.params.inventario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarPrecioinventarios'));
    }
}
exports.PrecioController = PrecioController;
