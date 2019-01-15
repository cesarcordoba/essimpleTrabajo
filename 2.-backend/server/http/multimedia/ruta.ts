
import { Router } from "express";
import { MultimediaController } from "./controlador";

export class MultimediaRouter {
    private _rutas = Router();
    private controlador: MultimediaController;

    constructor() {
        this.controlador = new MultimediaController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/multimedia')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/multimedia/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/multimedia/paginacion')
            .post(this.controlador.paginacion);

        this._rutas.route('/data/multimedia/fotoPerfil/:id')
            .get(this.controlador.fotoPerfil)

        this._rutas.route('/data/multimedia/xProyecto/:id')
            .get(this.controlador.xproyecto)

        this._rutas.route('/data/multimedia/Proyecto/:id')
            .get(this.controlador.proyecto)

        
        }

    rutas() {
        return this._rutas;
    }
}
