
const errorHandler = require('../error');
const _ = require('lodash');

import { Arquitecto } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class ArquitectoController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Arquitecto.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearArquitecto'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Arquitecto.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarArquitecto'))
        :
        Arquitecto.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarArquitecto'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Arquitecto.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarArquitecto'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Arquitecto.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarArquitecto'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Arquitecto.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionArquitecto'))


    //* 8
    contratistas = (req: Request, res: Response, next: NextFunction) =>
        Arquitecto.findById(req.params.id)
            .then(item => item.$get('Contratistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Arquitectocontratistas'))

    //* 8
    ligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Arquitecto.findById(req.params.arquitecto)
            .then(item => item.$add('Contratistas', req.params.contratista))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarArquitectocontratistas'))

    //* 8
    desligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Arquitecto.findById(req.params.arquitecto)
            .then(item => item.$remove('Contratistas', req.params.contratista))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarArquitectocontratistas'))

    
}