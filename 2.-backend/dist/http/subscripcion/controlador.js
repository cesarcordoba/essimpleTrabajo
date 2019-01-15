"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class SubscripcionController {
    constructor() {
        //* null
        this.crear = (req, res, next) => {
            console.log("***************");
            console.log(req.body);
            console.log("***************");
            modelo_1.Subscripcion.create(req.body)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'crearSubscripcion'));
        };
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Subscripcion.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarSubscripcion'))
            :
                modelo_1.Subscripcion.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarSubscripcion'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Subscripcion.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarSubscripcion'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Subscripcion.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarSubscripcion'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Subscripcion.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionSubscripcion'));
    }
}
exports.SubscripcionController = SubscripcionController;
