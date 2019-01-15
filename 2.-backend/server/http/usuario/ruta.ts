
import { Router } from "express";
import { UsuarioController } from "./controlador";

export class UsuarioRouter {
    private _rutas = Router();
    private controlador: UsuarioController;

    constructor() {
        this.controlador = new UsuarioController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/usuario')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/usuario/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/usuario/paginacion')
            .post(this.controlador.paginacion);
        
        this._rutas.route('/data/usuario/paginacionInversionista')
            .post(this.controlador.paginacionInversionista);
            
        this._rutas.route('/data/usuario/paginacionContratista')
            .post(this.controlador.paginacionContratista);



        //*
        this._rutas.route('/data/usuario/llaves/:id')
            .get(this.controlador.llaves)

        //*
        this._rutas.route('/data/usuario-llave/:usuario/:llave')
            .put(this.controlador.ligarllaves)
            .delete(this.controlador.desligarllaves)

        //*
        this._rutas.route('/data/usuario/avatares/:id')
            .get(this.controlador.avatares)

        //*
        this._rutas.route('/data/usuario-avatar/:usuario/:avatar')
            .put(this.controlador.ligaravatares)
            .delete(this.controlador.desligaravatares)

        //*
        this._rutas.route('/data/usuario/logs/:id')
            .get(this.controlador.logs)

        //*
        this._rutas.route('/data/usuario-log/:usuario/:log')
            .put(this.controlador.ligarlogs)
            .delete(this.controlador.desligarlogs)
        
        //*
        this._rutas.route('/data/usuario/Inversionistas/:id')
            .get(this.controlador.inversionistas)

        //*
        this._rutas.route('/data/usuario-proyecto/:usuario/:proyecto')
            .put(this.controlador.ligarinversionistas)
            .delete(this.controlador.desligarinversionistas)

                
        //*
        this._rutas.route('/data/usuario/Contratistas/:id')
            .get(this.controlador.contratistas)

        //*
        this._rutas.route('/data/usuario-proyecto/:usuario/:proyecto')
            .put(this.controlador.ligarcontratistas)
            .delete(this.controlador.desligarcontratistas)

                
        }

    rutas() {
        return this._rutas;
    }
}
