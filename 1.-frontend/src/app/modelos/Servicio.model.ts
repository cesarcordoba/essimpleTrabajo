
import { ServicioService } from '../servicios/Servicio.service'

export class Servicio {
    id: number;

    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }
   
}