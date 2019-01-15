
import { PortadaService } from '../servicios/Portada.service'

export class Portada {
    id: number;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}