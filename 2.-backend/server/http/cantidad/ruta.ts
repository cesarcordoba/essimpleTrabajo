
import { Router } from "express";
import { CantidadController } from "./controlador";

export class CantidadRouter {
    private _rutas = Router();
    private controlador: CantidadController;

    constructor() {
        this.controlador = new CantidadController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/cantidad')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/cantidad/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/cantidad/paginacion')
            .post(this.controlador.paginacion);


        }

    rutas() {
        return this._rutas;
    }
}
