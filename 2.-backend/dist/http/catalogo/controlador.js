"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class CatalogoController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Catalogo.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearCatalogo'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Catalogo.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarCatalogo'))
            :
                modelo_1.Catalogo.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarCatalogo'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Catalogo.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarCatalogo'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Catalogo.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarCatalogo'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Catalogo.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionCatalogo'));
        //* 12
        this.xmarca = (req, res, next) => modelo_1.Catalogo.findAll({ where: { 'IdMarca': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xCatalogomarcas'));
        //* 12
        this.marca = (req, res, next) => modelo_1.Catalogo.findById(req.params.id)
            .then(item => item.$get('Marca'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Catalogomarcas'));
    }
}
exports.CatalogoController = CatalogoController;
