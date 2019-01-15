
import { Router } from "express";
import { PortadaController } from "./controlador";

export class PortadaRouter {
    private _rutas = Router();
    private controlador: PortadaController;

    constructor() {
        this.controlador = new PortadaController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/portada')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/portada/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/portada/paginacion')
            .post(this.controlador.paginacion);


        this._rutas.route('/data/portada/xProyecto/:id')
            .get(this.controlador.xproyecto)

        this._rutas.route('/data/portada/Proyecto/:id')
            .get(this.controlador.proyecto)

        
        }

    rutas() {
        return this._rutas;
    }
}
