
import { Router } from "express";
import { ContratistaController } from "./controlador";

export class ContratistaRouter {
    private _rutas = Router();
    private controlador: ContratistaController;

    constructor() {
        this.controlador = new ContratistaController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/contratista')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/contratista/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/contratista/paginacion')
            .post(this.controlador.paginacion);



        //*
        this._rutas.route('/data/contratista/arquitectos/:id')
            .get(this.controlador.arquitectos)

        //*
        this._rutas.route('/data/contratista-arquitecto/:contratista/:arquitecto')
            .put(this.controlador.ligararquitectos)
            .delete(this.controlador.desligararquitectos)

        

        //*
        this._rutas.route('/data/contratista/constructoras/:id')
            .get(this.controlador.constructoras)

        //*
        this._rutas.route('/data/contratista-constructora/:contratista/:constructora')
            .put(this.controlador.ligarconstructoras)
            .delete(this.controlador.desligarconstructoras)
        
        //* Ruta agregada manualmente
        this._rutas.route('/data/contratista-usuario/contratista/:id')
            .get(this.controlador.obtenerInfo)


        this._rutas.route('/data/agregarProyecto/:id')
            .put(this.controlador.agregarProyecto);
        
        // this._rutas.route('/data/obtenerDatos/:id')
        //     .get(this.controlador.obtenerDatos);
        
        }

    rutas() {
        return this._rutas;
    }
}
