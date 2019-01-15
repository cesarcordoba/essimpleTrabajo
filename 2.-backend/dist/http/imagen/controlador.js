"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class ImagenController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Imagen.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearImagen'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Imagen.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarImagen'))
            :
                modelo_1.Imagen.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarImagen'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Imagen.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarImagen'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Imagen.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarImagen'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Imagen.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionImagen'));
        //* 1
        this.xproducto = (req, res, next) => modelo_1.Imagen.findAll({ where: { 'IdProducto': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xImagenproductos'));
        //* 1
        this.producto = (req, res, next) => modelo_1.Imagen.findById(req.params.id)
            .then(item => item.$get('Producto'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Imagenproductos'));
    }
}
exports.ImagenController = ImagenController;
