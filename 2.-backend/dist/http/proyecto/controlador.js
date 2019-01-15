"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const FroalaEditor = require("wysiwyg-editor-node-sdk");
const modelo_1 = require("./modelo");
class ProyectoController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Proyecto.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearProyecto'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Proyecto.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarProyecto'))
            :
                modelo_1.Proyecto.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarProyecto'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Proyecto.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarProyecto'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Proyecto.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarProyecto'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Proyecto.findAndCountAll({
            // order : ['nombre']
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionProyecto'));
        //* 4
        this.portadas = (req, res, next) => modelo_1.Proyecto.findById(req.params.id)
            .then(item => item.$get('Portadas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Proyectoportadas'));
        //* 4
        this.ligarportadas = (req, res, next) => modelo_1.Proyecto.findById(req.params.proyecto)
            .then(item => item.$add('Portadas', req.params.portada))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarProyectoportadas'));
        //* 4
        this.desligarportadas = (req, res, next) => modelo_1.Proyecto.findById(req.params.proyecto)
            .then(item => item.$remove('Portadas', req.params.portada))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarProyectoportadas'));
        //* 3
        this.multimedias = (req, res, next) => modelo_1.Proyecto.findById(req.params.id)
            .then(item => item.$get('Multimedias'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Proyectomultimedias'));
        //* 3
        this.ligarmultimedias = (req, res, next) => modelo_1.Proyecto.findById(req.params.proyecto)
            .then(item => item.$add('Multimedias', req.params.multimedia))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarProyectomultimedias'));
        //* 3
        this.desligarmultimedias = (req, res, next) => modelo_1.Proyecto.findById(req.params.proyecto)
            .then(item => item.$remove('Multimedias', req.params.multimedia))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarProyectomultimedias'));
        //* 5
        this.inversionistas = (req, res, next) => modelo_1.Proyecto.findById(req.params.id)
            .then(item => item.$get('Inversionistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ProyectoInversionistas'));
        //* 5
        this.ligarinversionistas = (req, res, next) => modelo_1.Proyecto.findById(req.params.proyecto)
            .then(item => item.$add('Inversionistas', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarProyectoInversionistas'));
        //* 5
        this.desligarinversionistas = (req, res, next) => modelo_1.Proyecto.findById(req.params.proyecto)
            .then(item => item.$remove('Inversionistas', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarProyectoInversionistas'));
        //* 8
        this.contratistas = (req, res, next) => modelo_1.Proyecto.findById(req.params.id)
            .then(item => item.$get('Contratistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ProyectoContratistas'));
        //* 8
        this.ligarcontratistas = (req, res, next) => modelo_1.Proyecto.findById(req.params.proyecto)
            .then(item => item.$add('Contratistas', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarProyectoContratistas'));
        //* 8
        this.desligarcontratistas = (req, res, next) => modelo_1.Proyecto.findById(req.params.proyecto)
            .then(item => item.$remove('Contratistas', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarProyectoContratistas'));
        this.froala = (req, res, next) => {
            var configs = {
                bucket: 'colnal-imagenes',
                region: 'us-east-1',
                keyStart: 'froala-esimple/',
                acl: 'public-read',
                accessKey: 'AKIAJEYX66PCBH6V4VHQ',
                secretKey: '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',
            };
            var s3Hash = FroalaEditor.S3.getHash(configs);
            res.status(200).jsonp(s3Hash);
            console.log(s3Hash);
        };
    }
}
exports.ProyectoController = ProyectoController;
