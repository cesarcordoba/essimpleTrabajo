"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class EspacioController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Espacio.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearEspacio'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Espacio.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarEspacio'))
            :
                modelo_1.Espacio.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarEspacio'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Espacio.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarEspacio'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Espacio.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarEspacio'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Espacio.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionEspacio'));
        //* 27
        this.xambiente = (req, res, next) => modelo_1.Espacio.findAll({ where: { 'IdAmbiente': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xEspacioambientes'));
        //* 27
        this.ambiente = (req, res, next) => modelo_1.Espacio.findById(req.params.id)
            .then(item => item.$get('Ambiente'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Espacioambientes'));
    }
}
exports.EspacioController = EspacioController;
