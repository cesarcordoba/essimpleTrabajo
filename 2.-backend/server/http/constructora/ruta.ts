
import { Router } from "express";
import { ConstructoraController } from "./controlador";

export class ConstructoraRouter {
    private _rutas = Router();
    private controlador: ConstructoraController;

    constructor() {
        this.controlador = new ConstructoraController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/constructora')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/constructora/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/constructora/paginacion')
            .post(this.controlador.paginacion);



        //*
        this._rutas.route('/data/constructora/contratistas/:id')
            .get(this.controlador.contratistas)

        //*
        this._rutas.route('/data/constructora-contratista/:constructora/:contratista')
            .put(this.controlador.ligarcontratistas)
            .delete(this.controlador.desligarcontratistas)

        
        }

    rutas() {
        return this._rutas;
    }
}
