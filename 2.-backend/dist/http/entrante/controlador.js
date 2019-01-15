"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class EntranteController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Entrante.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearEntrante'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Entrante.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarEntrante'))
            :
                modelo_1.Entrante.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarEntrante'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Entrante.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarEntrante'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Entrante.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarEntrante'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Entrante.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionEntrante'));
    }
}
exports.EntranteController = EntranteController;
