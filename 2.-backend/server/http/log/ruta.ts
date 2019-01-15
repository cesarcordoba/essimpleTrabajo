
import { Router } from "express";
import { LogController } from "./controlador";

export class LogRouter {
    private _rutas = Router();
    private controlador: LogController;

    constructor() {
        this.controlador = new LogController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/log')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/log/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/log/paginacion')
            .post(this.controlador.paginacion);


        this._rutas.route('/data/log/xUsuario/:id')
            .get(this.controlador.xusuario)

        this._rutas.route('/data/log/Usuario/:id')
            .get(this.controlador.usuario)

        
        }

    rutas() {
        return this._rutas;
    }
}
