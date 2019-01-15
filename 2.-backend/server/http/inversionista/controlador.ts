
const errorHandler = require('../error');
const _ = require('lodash');

import { Inversionista } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class InversionistaController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Inversionista.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearInversionista'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Inversionista.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarInversionista'))
        :
        Inversionista.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarInversionista'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Inversionista.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarInversionista'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Inversionista.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarInversionista'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Inversionista.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionInversionista'))


}