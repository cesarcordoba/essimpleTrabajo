
import { Router } from "express";
import { AvatarController } from "./controlador";

export class AvatarRouter {
    private _rutas = Router();
    private controlador: AvatarController;

    constructor() {
        this.controlador = new AvatarController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/avatar')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/avatar/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/avatar/paginacion')
            .post(this.controlador.paginacion);


        this._rutas.route('/data/avatar/xUsuario/:id')
            .get(this.controlador.xusuario)

        this._rutas.route('/data/avatar/Usuario/:id')
            .get(this.controlador.usuario)

        
        }

    rutas() {
        return this._rutas;
    }
}
