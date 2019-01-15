"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class ContratistaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Contratista.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearContratista'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Contratista.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarContratista'))
            :
                modelo_1.Contratista.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarContratista'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Contratista.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarContratista'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Contratista.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarContratista'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Contratista.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionContratista'));
        //* 9
        this.arquitectos = (req, res, next) => modelo_1.Contratista.findById(req.params.id)
            .then(item => item.$get('Arquitectos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Contratistaarquitectos'));
        //* 9
        this.ligararquitectos = (req, res, next) => modelo_1.Contratista.findById(req.params.contratista)
            .then(item => item.$add('Arquitectos', req.params.arquitecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarContratistaarquitectos'));
        //* 9
        this.desligararquitectos = (req, res, next) => modelo_1.Contratista.findById(req.params.contratista)
            .then(item => item.$remove('Arquitectos', req.params.arquitecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarContratistaarquitectos'));
        //* 10
        this.constructoras = (req, res, next) => modelo_1.Contratista.findById(req.params.id)
            .then(item => item.$get('Constructoras'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Contratistaconstructoras'));
        //* 10
        this.ligarconstructoras = (req, res, next) => modelo_1.Contratista.findById(req.params.contratista)
            .then(item => item.$add('Constructoras', req.params.constructora))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarContratistaconstructoras'));
        //* 10
        this.desligarconstructoras = (req, res, next) => modelo_1.Contratista.findById(req.params.contratista)
            .then(item => item.$remove('Constructoras', req.params.constructora))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarContratistaconstructoras'));
        //Controlador agregado manualmente
        this.obtenerInfo = (req, res, next) => modelo_1.Contratista.findById(req.params.id)
            .then(item => item.$get('Usuarios'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'obtenerInfo'));
        this.agregarProyecto = (req, res, next) => modelo_1.Contratista.update(req.body, { where: { IdUsuario: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'agregarProyectoContratista'));
        // obtenerDatos = (req: Request, res: Response, next: NextFunction) =>
        //     Contratista.findAll({where: {IdUsuario: req.params.id}})
        //         .then(response => res.status(200).jsonp(response))
        //         .catch(err => errorHandler(err, 'agregarProyectoContratista'))
    }
}
exports.ContratistaController = ContratistaController;
