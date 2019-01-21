
import { CantidadService } from '../servicios/Cantidad.service'

export class Cantidad {
    id: number;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}