
const errorHandler = require('../error');
const _ = require('lodash');

import { Contratista } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class ContratistaController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Contratista.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearContratista'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Contratista.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarContratista'))
        :
        Contratista.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarContratista'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Contratista.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarContratista'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarContratista'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionContratista'))


    //* 9
    arquitectos = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findById(req.params.id)
            .then(item => item.$get('Arquitectos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Contratistaarquitectos'))

    //* 9
    ligararquitectos = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findById(req.params.contratista)
            .then(item => item.$add('Arquitectos', req.params.arquitecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarContratistaarquitectos'))

    //* 9
    desligararquitectos = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findById(req.params.contratista)
            .then(item => item.$remove('Arquitectos', req.params.arquitecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarContratistaarquitectos'))

    
    //* 10
    constructoras = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findById(req.params.id)
            .then(item => item.$get('Constructoras'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Contratistaconstructoras'))

    //* 10
    ligarconstructoras = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findById(req.params.contratista)
            .then(item => item.$add('Constructoras', req.params.constructora))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarContratistaconstructoras'))

    //* 10
    desligarconstructoras = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findById(req.params.contratista)
            .then(item => item.$remove('Constructoras', req.params.constructora))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarContratistaconstructoras'))
    
    //Controlador agregado manualmente
    obtenerInfo = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findById(req.params.id)
            .then(item => item.$get('Usuarios'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'obtenerInfo'))
            
            
    agregarProyecto = (req: Request, res: Response, next: NextFunction) =>
        Contratista.update(req.body,{ where: { IdUsuario: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'agregarProyectoContratista'))
            
    // obtenerDatos = (req: Request, res: Response, next: NextFunction) =>
    //     Contratista.findAll({where: {IdUsuario: req.params.id}})
    //         .then(response => res.status(200).jsonp(response))
    //         .catch(err => errorHandler(err, 'agregarProyectoContratista'))
}