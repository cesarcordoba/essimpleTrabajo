"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const opcionesdisponibles = require('./opcionesdisponibles/opcionesdisponibles');
const precios = require('./precios/precios');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class VersionController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Version.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearVersion'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Version.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarVersion'))
            :
                modelo_1.Version.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarVersion'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Version.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarVersion'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarVersion'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Version.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionVersion'));
        //* 1
        this.xproducto = (req, res, next) => modelo_1.Version.findAll({ where: { 'IdProducto': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xVersionproductos'));
        //* 1
        this.producto = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Producto'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Versionproductos'));
        //* 11
        this.opciones = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Opciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Versionopciones'));
        //* 11
        this.ligaropciones = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Opciones', req.params.opcion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionopciones'));
        //* 11
        this.desligaropciones = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Opciones', req.params.opcion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionopciones'));
        //* 19
        this.descuentos = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Descuentos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Versiondescuentos'));
        //* 19
        this.ligardescuentos = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Descuentos', req.params.descuento))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersiondescuentos'));
        //* 19
        this.desligardescuentos = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Descuentos', req.params.descuento))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersiondescuentos'));
        //* 21
        this.entrantes = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Entrantes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'VersionEntrantes'));
        //* 21
        this.ligarentrantes = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Entrantes', req.params.oferta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionEntrantes'));
        //* 21
        this.desligarentrantes = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Entrantes', req.params.oferta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionEntrantes'));
        //* 22
        this.salientes = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Salientes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'VersionSalientes'));
        //* 22
        this.ligarsalientes = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Salientes', req.params.oferta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionSalientes'));
        //* 22
        this.desligarsalientes = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Salientes', req.params.oferta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionSalientes'));
        //* 23
        this.sucursales = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Sucursales'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'VersionSucursales'));
        //* 23
        this.ligarsucursales = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Sucursales', req.params.sucursal))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionSucursales'));
        //* 23
        this.desligarsucursales = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Sucursales', req.params.sucursal))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionSucursales'));
        this.opcionesdisponibles = (req, res, next) => opcionesdisponibles(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Version_opcionesdisponibles'));
        this.precios = (req, res, next) => precios(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Version_precios'));
    }
}
exports.VersionController = VersionController;
