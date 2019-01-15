
import { ContratistaService } from '../servicios/Contratista.service'

export class Contratista {
    id: number;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}