
import { MultimediaService } from '../servicios/Multimedia.service'

export class Multimedia {
    id: number;
    link: any;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}