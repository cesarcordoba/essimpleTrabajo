
const errorHandler = require('../error');
const _ = require('lodash');
import * as FroalaEditor from 'wysiwyg-editor-node-sdk';
import { Proyecto } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class ProyectoController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearProyecto'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Proyecto.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarProyecto'))
        :
        Proyecto.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarProyecto'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarProyecto'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarProyecto'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findAndCountAll({
            // order : ['nombre']
           where: req.body.where
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionProyecto'))


    //* 4
    portadas = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.id)
            .then(item => item.$get('Portadas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Proyectoportadas'))

    //* 4
    ligarportadas = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.proyecto)
            .then(item => item.$add('Portadas', req.params.portada))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarProyectoportadas'))

    //* 4
    desligarportadas = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.proyecto)
            .then(item => item.$remove('Portadas', req.params.portada))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarProyectoportadas'))

    
    //* 3
    multimedias = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.id)
            .then(item => item.$get('Multimedias'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Proyectomultimedias'))

    //* 3
    ligarmultimedias = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.proyecto)
            .then(item => item.$add('Multimedias', req.params.multimedia))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarProyectomultimedias'))

    //* 3
    desligarmultimedias = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.proyecto)
            .then(item => item.$remove('Multimedias', req.params.multimedia))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarProyectomultimedias'))

    
    //* 5
    inversionistas = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.id)
            .then(item => item.$get('Inversionistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ProyectoInversionistas'))

    //* 5
    ligarinversionistas = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.proyecto)
            .then(item => item.$add('Inversionistas', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarProyectoInversionistas'))

    //* 5
    desligarinversionistas = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.proyecto)
            .then(item => item.$remove('Inversionistas', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarProyectoInversionistas'))

                
    //* 8
    contratistas = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.id)
            .then(item => item.$get('Contratistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ProyectoContratistas'))

    //* 8
    ligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.proyecto)
            .then(item => item.$add('Contratistas', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarProyectoContratistas'))

    //* 8
    desligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Proyecto.findById(req.params.proyecto)
            .then(item => item.$remove('Contratistas', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarProyectoContratistas'))

    froala = (req: Request, res: Response, next: NextFunction) => {
        var configs = {
            bucket: 'colnal-imagenes',
            region: 'us-east-1',
            keyStart: 'froala-esimple/',
            acl: 'public-read',
            accessKey: 'AKIAJEYX66PCBH6V4VHQ',
            secretKey: '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',
        }
        var s3Hash = FroalaEditor.S3.getHash(configs);
        res.status(200).jsonp(s3Hash);
        console.log(s3Hash);
    }
}