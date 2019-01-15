"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class ContactoController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Contacto.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearContacto'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Contacto.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarContacto'))
            :
                modelo_1.Contacto.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarContacto'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Contacto.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarContacto'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Contacto.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarContacto'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Contacto.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionContacto'));
    }
}
exports.ContactoController = ContactoController;
