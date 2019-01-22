"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class CantidadController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Cantidad.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearCantidad'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Cantidad.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarCantidad'))
            :
                modelo_1.Cantidad.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarCantidad'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Cantidad.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarCantidad'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Cantidad.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarCantidad'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Cantidad.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionCantidad'));
    }
}
exports.CantidadController = CantidadController;
