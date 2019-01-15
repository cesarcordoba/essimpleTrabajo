
const errorHandler = require('../error');
const _ = require('lodash');

import { Llave } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class LlaveController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Llave.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearLlave'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Llave.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarLlave'))
        :
        Llave.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarLlave'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Llave.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarLlave'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Llave.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarLlave'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Llave.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionLlave'))


    //* 6
    xusuario = (req: Request, res: Response, next: NextFunction) =>
        Llave.findAll(
            { where : { 'IdUsuario' : req.params.id } }
            )
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xLlaveusuarios'))

    //* 6
    usuario = (req: Request, res: Response, next: NextFunction) =>
        Llave.findById(req.params.id )
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Llaveusuarios'))


    
}