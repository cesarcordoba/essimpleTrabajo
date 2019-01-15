
import { Router } from "express";
import { InversionistaController } from "./controlador";

export class InversionistaRouter {
    private _rutas = Router();
    private controlador: InversionistaController;

    constructor() {
        this.controlador = new InversionistaController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/inversionista')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/inversionista/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/inversionista/paginacion')
            .post(this.controlador.paginacion);


        }

    rutas() {
        return this._rutas;
    }
}
