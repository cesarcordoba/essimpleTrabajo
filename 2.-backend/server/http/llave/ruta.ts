
import { Router } from "express";
import { LlaveController } from "./controlador";

export class LlaveRouter {
    private _rutas = Router();
    private controlador: LlaveController;

    constructor() {
        this.controlador = new LlaveController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/llave')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/llave/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/llave/paginacion')
            .post(this.controlador.paginacion);


        this._rutas.route('/data/llave/xUsuario/:id')
            .get(this.controlador.xusuario)

        this._rutas.route('/data/llave/Usuario/:id')
            .get(this.controlador.usuario)

        
        }

    rutas() {
        return this._rutas;
    }
}
