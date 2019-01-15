
import { InversionistaService } from '../servicios/Inversionista.service'

export class Inversionista {
    id: number;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}