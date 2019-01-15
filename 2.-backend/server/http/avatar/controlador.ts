
const errorHandler = require('../error');
const _ = require('lodash');

import { Avatar } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class AvatarController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Avatar.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearAvatar'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Avatar.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarAvatar'))
        :
        Avatar.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarAvatar'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Avatar.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarAvatar'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Avatar.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarAvatar'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Avatar.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionAvatar'))


    //* 31
    xusuario = (req: Request, res: Response, next: NextFunction) =>
        Avatar.findAll(
            { where : { 'IdUsuario' : req.params.id } }
            )
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xAvatarusuarios'))

    //* 31
    usuario = (req: Request, res: Response, next: NextFunction) =>
        Avatar.findById(req.params.id )
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Avatarusuarios'))


    
}