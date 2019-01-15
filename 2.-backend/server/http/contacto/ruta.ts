
import { Router } from "express";
import { ContactoController } from "./controlador";

export class ContactoRouter {
    private _rutas = Router();
    private controlador: ContactoController;

    constructor() {
        this.controlador = new ContactoController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/contacto')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/contacto/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/contacto/paginacion')
            .post(this.controlador.paginacion);


        }

    rutas() {
        return this._rutas;
    }
}
