
const errorHandler = require('../error');
const _ = require('lodash');

import { Cantidad } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class CantidadController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Cantidad.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearCantidad'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Cantidad.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarCantidad'))
        :
        Cantidad.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarCantidad'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Cantidad.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarCantidad'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Cantidad.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarCantidad'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Cantidad.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionCantidad'))


}