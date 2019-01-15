
import { Router } from "express";
import { ArquitectoController } from "./controlador";

export class ArquitectoRouter {
    private _rutas = Router();
    private controlador: ArquitectoController;

    constructor() {
        this.controlador = new ArquitectoController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/arquitecto')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/arquitecto/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/arquitecto/paginacion')
            .post(this.controlador.paginacion);



        //*
        this._rutas.route('/data/arquitecto/contratistas/:id')
            .get(this.controlador.contratistas)

        //*
        this._rutas.route('/data/arquitecto-contratista/:arquitecto/:contratista')
            .put(this.controlador.ligarcontratistas)
            .delete(this.controlador.desligarcontratistas)

        
        }

    rutas() {
        return this._rutas;
    }
}
