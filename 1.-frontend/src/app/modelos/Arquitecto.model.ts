
import { ArquitectoService } from '../servicios/Arquitecto.service'

export class Arquitecto {
    id: number;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}