
const errorHandler = require('../error');
const _ = require('lodash');

import { Constructora } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class ConstructoraController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Constructora.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearConstructora'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Constructora.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarConstructora'))
        :
        Constructora.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarConstructora'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Constructora.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarConstructora'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Constructora.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarConstructora'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Constructora.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionConstructora'))


    //* 8
    contratistas = (req: Request, res: Response, next: NextFunction) =>
        Constructora.findById(req.params.id)
            .then(item => item.$get('Contratistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Constructoracontratistas'))

    //* 8
    ligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Constructora.findById(req.params.constructora)
            .then(item => item.$add('Contratistas', req.params.contratista))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarConstructoracontratistas'))

    //* 8
    desligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Constructora.findById(req.params.constructora)
            .then(item => item.$remove('Contratistas', req.params.contratista))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarConstructoracontratistas'))

    
}