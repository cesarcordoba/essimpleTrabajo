
import { ConstructoraService } from '../servicios/Constructora.service'

export class Constructora {
    id: number;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}