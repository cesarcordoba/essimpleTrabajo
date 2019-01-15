
import { SubscripcionService } from '../servicios/Subscripcion.service'

export class Subscripcion {
    id: number;
    suscriptor: any;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}