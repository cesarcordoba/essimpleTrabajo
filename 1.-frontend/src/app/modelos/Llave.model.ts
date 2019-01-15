
import { LlaveService } from '../servicios/Llave.service'

export class Llave {
    id: number;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}