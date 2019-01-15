
import { ContactoService } from '../servicios/Contacto.service'

export class Contacto {
    id: number;
    nombre: any;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}