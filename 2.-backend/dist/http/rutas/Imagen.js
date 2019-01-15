"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Imagen_1 = require("../controladores/Imagen");
class ImagenRouter {
    constructor() {
        this._rutas = express_1.Router();
        this._controller = new Imagen_1.ImagenController();
        this.init();
    }
    init() {
        this._rutas.route('/data/imagen')
            .get(this._controller.buscar)
            .post(this._controller.crear);
        this._rutas.route('/data/imagen/:id')
            .get(this._controller.buscar)
            .put(this._controller.actualizar)
            .delete(this._controller.eliminar);
        this._rutas.route('/froalahash')
            .get(this._controller.froala);
    }
    rutas() {
        return this._rutas;
    }
}
exports.ImagenRouter = ImagenRouter;
