import { Router, Response, Request, NextFunction} from "express";


export class Ruteador{
    private _router = Router();

    constructor(rutas: Router[]) {
        this.asignarRutas(rutas);
    }

    static init(routers: Router[]): Ruteador{
        return new Ruteador(routers);
    }

    private asignarRutas(rutas: Router[]){
        rutas.forEach(route => this._router.use(route));
    }

    get route(){
        return this._router;
    }

}