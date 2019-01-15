"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prospecto_1 = require("../modelos/Prospecto");
class ProspectoController {
    crear(req, res, next) {
        Prospecto_1.Prospecto.create(req.body)
            .then(response => res.status(200).jsonp(response));
    }
    buscar(req, res, next) {
        req.params.id ?
            Prospecto_1.Prospecto.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
            :
                Prospecto_1.Prospecto.findAll()
                    .then(response => res.status(200).jsonp(response));
    }
    actualizar(req, res, next) {
        Prospecto_1.Prospecto.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp({ msj: 'SUCCESS!' }));
    }
    eliminar(req, res, next) {
        Prospecto_1.Prospecto.findById(req.params.id)
            .then(prospecto => prospecto.destroy().then(response => res.status(200).jsonp(response)));
    }
}
exports.ProspectoController = ProspectoController;
