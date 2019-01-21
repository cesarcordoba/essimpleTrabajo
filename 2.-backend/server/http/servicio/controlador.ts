const errorHandler = require('../error');
const _ = require('lodash');

import { Servicio } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class ServicioController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Servicio.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearServicio'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Servicio.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarServicio'))
        :
        Servicio.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarServicio'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Servicio.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarServicio'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Servicio.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarServicio'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Servicio.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionServicio'))

    
    //* null
    cantidades = (req: Request, res: Response, next: NextFunction) =>
        Servicio.findById(req.params.id)
            .then(item => item.$get('Cantidades'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ServicioCantidades'))

    //* null
    ligarcantidades = (req: Request, res: Response, next: NextFunction) =>
        Servicio.findById(req.params.servicio)
            .then(item => item.$add('Cantidades', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioCantidades'))

    //* null
    desligarcantidades = (req: Request, res: Response, next: NextFunction) =>
        Servicio.findById(req.params.servicio)
            .then(item => item.$remove('Cantidades', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioCantidades'))
                
}