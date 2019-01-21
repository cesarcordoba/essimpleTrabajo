
import { Router } from "express";
import { ServicioController } from "./controlador";

export class ServicioRouter {
    private _rutas = Router();
    private controlador: ServicioController;

    constructor() {
        this.controlador = new ServicioController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/servicio')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/servicio/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/servicio/paginacion')
            .post(this.controlador.paginacion);
        
        //*
        this._rutas.route('/data/servicio/Cantidades/:id')
            .get(this.controlador.cantidades)

        //*
        this._rutas.route('/data/servicio-proyecto/:servicio/:proyecto')
            .put(this.controlador.ligarcantidades)
            .delete(this.controlador.desligarcantidades)
                
        }

    rutas() {
        return this._rutas;
    }
}
