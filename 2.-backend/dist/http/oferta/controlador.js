"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class OfertaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Oferta.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearOferta'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Oferta.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarOferta'))
            :
                modelo_1.Oferta.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarOferta'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Oferta.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarOferta'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Oferta.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarOferta'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Oferta.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionOferta'));
        //* 17
        this.xpromo = (req, res, next) => modelo_1.Oferta.findAll({ where: { 'IdPromo': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xOfertapromos'));
        //* 17
        this.promo = (req, res, next) => modelo_1.Oferta.findById(req.params.id)
            .then(item => item.$get('Promo'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Ofertapromos'));
        //* 21
        this.salientes = (req, res, next) => modelo_1.Oferta.findById(req.params.id)
            .then(item => item.$get('Salientes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'OfertaSalientes'));
        //* 21
        this.ligarsalientes = (req, res, next) => modelo_1.Oferta.findById(req.params.oferta)
            .then(item => item.$add('Salientes', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarOfertaSalientes'));
        //* 21
        this.desligarsalientes = (req, res, next) => modelo_1.Oferta.findById(req.params.oferta)
            .then(item => item.$remove('Salientes', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarOfertaSalientes'));
        //* 22
        this.entrantes = (req, res, next) => modelo_1.Oferta.findById(req.params.id)
            .then(item => item.$get('Entrantes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'OfertaEntrantes'));
        //* 22
        this.ligarentrantes = (req, res, next) => modelo_1.Oferta.findById(req.params.oferta)
            .then(item => item.$add('Entrantes', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarOfertaEntrantes'));
        //* 22
        this.desligarentrantes = (req, res, next) => modelo_1.Oferta.findById(req.params.oferta)
            .then(item => item.$remove('Entrantes', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarOfertaEntrantes'));
    }
}
exports.OfertaController = OfertaController;
