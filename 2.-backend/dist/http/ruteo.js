"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Ruteador {
    constructor(rutas) {
        this._router = express_1.Router();
        this.asignarRutas(rutas);
    }
    static init(routers) {
        return new Ruteador(routers);
    }
    asignarRutas(rutas) {
        rutas.forEach(route => this._router.use(route));
    }
    get route() {
        return this._router;
    }
}
exports.Ruteador = Ruteador;
