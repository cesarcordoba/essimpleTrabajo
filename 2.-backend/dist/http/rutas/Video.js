"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Video_1 = require("../controladores/Video");
class VideoRouter {
    constructor() {
        this._rutas = express_1.Router();
        this._controller = new Video_1.VideoController();
        this.init();
    }
    init() {
        this._rutas.route('/data/video')
            .get(this._controller.buscar)
            .post(this._controller.crear);
        this._rutas.route('/data/video/:id')
            .get(this._controller.buscar)
            .put(this._controller.actualizar)
            .delete(this._controller.eliminar);
    }
    rutas() {
        return this._rutas;
    }
}
exports.VideoRouter = VideoRouter;
