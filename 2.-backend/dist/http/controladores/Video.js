"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Video_1 = require("../modelos/Video");
class VideoController {
    crear(req, res, next) {
        Video_1.Video.create(req.body)
            .then(response => res.status(200).jsonp(response));
    }
    buscar(req, res, next) {
        req.params.id ?
            Video_1.Video.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
            :
                Video_1.Video.findAll()
                    .then(response => res.status(200).jsonp(response));
    }
    actualizar(req, res, next) {
        Video_1.Video.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp({ msj: 'SUCCESS!' }));
    }
    eliminar(req, res, next) {
        Video_1.Video.findById(req.params.id)
            .then(video => video.destroy().then(response => res.status(200).jsonp(response)));
    }
}
exports.VideoController = VideoController;
