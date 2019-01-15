"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class InversionistaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Inversionista.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearInversionista'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Inversionista.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarInversionista'))
            :
                modelo_1.Inversionista.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarInversionista'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Inversionista.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarInversionista'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Inversionista.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarInversionista'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Inversionista.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionInversionista'));
    }
}
exports.InversionistaController = InversionistaController;
