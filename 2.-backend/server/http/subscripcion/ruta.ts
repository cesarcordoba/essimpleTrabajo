
import { Router } from "express";
import { SubscripcionController } from "./controlador";

export class SubscripcionRouter {
    private _rutas = Router();
    private controlador: SubscripcionController;

    constructor() {
        this.controlador = new SubscripcionController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/subscripcion')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/subscripcion/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/subscripcion/paginacion')
            .post(this.controlador.paginacion);


        }

    rutas() {
        return this._rutas;
    }
}
