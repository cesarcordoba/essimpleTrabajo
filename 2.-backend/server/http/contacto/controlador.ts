
const errorHandler = require('../error');
const _ = require('lodash');

import { Contacto } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class ContactoController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Contacto.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearContacto'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Contacto.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarContacto'))
        :
        Contacto.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarContacto'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Contacto.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarContacto'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Contacto.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarContacto'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Contacto.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionContacto'))


}