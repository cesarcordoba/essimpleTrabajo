
const errorHandler = require('../error');
const _ = require('lodash');

import { Usuario } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class UsuarioController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Usuario.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearUsuario'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Usuario.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarUsuario'))
        :
        Usuario.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarUsuario'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Usuario.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarUsuario'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarUsuario'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionUsuario'))

    paginacionInversionista = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findAndCountAll({
            where:{tipo: 'inversionista'}
            }).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionInversionista'))
        
    paginacionContratista = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findAndCountAll({
            where:{tipo: 'contratista'}
            }).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionContratista'))
    //* 11
    llaves = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.id)
            .then(item => item.$get('Llave'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuariollaves'))

    //* 11
    ligarllaves = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$add('Llave', req.params.llave))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuariollaves'))

    //* 11
    desligarllaves = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Llave', req.params.llave))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuariollaves'))
    
    //* 12
    avatares = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.id)
            .then(item => item.$get('Avatares'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuarioavatares'))

    //* 12
    ligaravatares = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$add('Avatares', req.params.avatar))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioavatares'))

    //* 12
    desligaravatares = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Avatares', req.params.avatar))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioavatares'))

    
    //* 13
    logs = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.id)
            .then(item => item.$get('Logs'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuariologs'))

    //* 13
    ligarlogs = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$add('Logs', req.params.log))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuariologs'))

    //* 13
    desligarlogs = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Logs', req.params.log))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuariologs'))

    
    //* 5
    inversionistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.id)
            .then(item => item.$get('Inversionistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'UsuarioInversionistas'))

    //* 5
    ligarinversionistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$add('Inversionistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioInversionistas'))

    //* 5
    desligarinversionistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Inversionistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioInversionistas'))

                
    //* 8
    contratistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.id)
            .then(item => item.$get('Contratistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'UsuarioContratistas'))
    
    //* 8
    ligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$add('Contratistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioContratistas'))

    //* 8
    desligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Contratistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioContratistas'))

                
}