
const errorHandler = require('../error');
const _ = require('lodash');

import { Portada } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class PortadaController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Portada.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearPortada'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Portada.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarPortada'))
        :
        Portada.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarPortada'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Portada.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarPortada'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Portada.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarPortada'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Portada.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionPortada'))


    //* 1
    xproyecto = (req: Request, res: Response, next: NextFunction) =>
        Portada.findAll(
            { where : { 'IdProyecto' : req.params.id } }
            )
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xPortadaproyectos'))

    //* 1
    proyecto = (req: Request, res: Response, next: NextFunction) =>
        Portada.findById(req.params.id )
            .then(item => item.$get('Proyecto'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Portadaproyectos'))


    
}