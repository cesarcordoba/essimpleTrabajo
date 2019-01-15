
const errorHandler = require('../error');
const _ = require('lodash');

import { Log } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class LogController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Log.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearLog'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Log.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarLog'))
        :
        Log.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarLog'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Log.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarLog'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Log.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarLog'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Log.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionLog'))


    //* 31
    xusuario = (req: Request, res: Response, next: NextFunction) =>
        Log.findAll(
            { where : { 'IdUsuario' : req.params.id } }
            )
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xLogusuarios'))

    //* 31
    usuario = (req: Request, res: Response, next: NextFunction) =>
        Log.findById(req.params.id )
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Logusuarios'))


    
}