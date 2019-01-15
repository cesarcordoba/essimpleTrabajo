
const errorHandler = require('../error');
const _ = require('lodash');

import { Multimedia } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class MultimediaController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Multimedia.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearMultimedia'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Multimedia.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarMultimedia'))
        :
        Multimedia.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarMultimedia'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Multimedia.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarMultimedia'))

    //-NUEVA-
    fotoPerfil = (req: Request, res: Response, next: NextFunction) =>
        Multimedia.findAll({ where: { tipo: req.params.id}})
        .then(response => res.status(200).jsonp(response))
        .catch(err => errorHandler(err, 'fotoPerfilMultimedia'))
        
    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Multimedia.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarMultimedia'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Multimedia.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionMultimedia'))


    //* 1
    xproyecto = (req: Request, res: Response, next: NextFunction) =>
        Multimedia.findAll(
            { where : { 'IdProyecto' : req.params.id } }
            )
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xMultimediaproyectos'))

    //* 1
    proyecto = (req: Request, res: Response, next: NextFunction) =>
        Multimedia.findById(req.params.id )
            .then(item => item.$get('Proyecto'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Multimediaproyectos'))


    
}