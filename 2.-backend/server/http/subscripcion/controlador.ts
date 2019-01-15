
const errorHandler = require('../error');
const _ = require('lodash');

import { Subscripcion } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class SubscripcionController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
       {
        console.log("***************")
        console.log(req.body)
        console.log("***************")
        Subscripcion.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearSubscripcion'))
        }
    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Subscripcion.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarSubscripcion'))
        :
        Subscripcion.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarSubscripcion'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Subscripcion.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarSubscripcion'))
    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Subscripcion.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarSubscripcion'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Subscripcion.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionSubscripcion'))


}
