"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class SalienteController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Saliente.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearSaliente'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Saliente.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarSaliente'))
            :
                modelo_1.Saliente.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarSaliente'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Saliente.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarSaliente'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Saliente.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarSaliente'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Saliente.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionSaliente'));
    }
}
exports.SalienteController = SalienteController;
