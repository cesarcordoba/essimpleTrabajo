"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("../modelos/Usuario");
const LlaveSocial_1 = require("../modelos/LlaveSocial");
class UsuarioController {
    crear(req, res, next) {
        Usuario_1.Usuario.create(req.body)
            .then(response => res.status(200).jsonp(response));
    }
    buscar(req, res, next) {
        req.params.id ?
            Usuario_1.Usuario.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
            :
                Usuario_1.Usuario.findAll()
                    .then(response => res.status(200).jsonp(response));
    }
    actualizar(req, res, next) {
        // Usuario.update(req.body,{ where: { id: req.params.id}, individualHooks: true, include: []})
        //     .then(response => res.status(200).jsonp({msj: 'SUCCESS!'}))
        Usuario_1.Usuario.findById(req.params.id, { include: [LlaveSocial_1.LlaveSocial] }).then(user => {
            user.update(req.body, { individualHooks: true }).then(user => res.status(200).jsonp({ msj: 'SUCCESS!' }));
        });
    }
    eliminar(req, res, next) {
        Usuario_1.Usuario.findById(req.params.id)
            .then(usuario => usuario.destroy().then(response => res.status(200).jsonp(response)));
    }
}
exports.UsuarioController = UsuarioController;
