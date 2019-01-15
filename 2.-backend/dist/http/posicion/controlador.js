"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class PosicionController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Posicion.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearPosicion'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Posicion.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarPosicion'))
            :
                modelo_1.Posicion.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarPosicion'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Posicion.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarPosicion'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Posicion.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarPosicion'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Posicion.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionPosicion'));
    }
}
exports.PosicionController = PosicionController;
