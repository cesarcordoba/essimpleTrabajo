
import { AvatarService } from '../servicios/Avatar.service'

export class Avatar {
    id: number;


        usuario : any;
    link : string;

    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }



    obtenerUsuario(){
        return new Promise(resolve => {
            AvatarService.usuario(this.id)
            .then(response => this.usuario = response)
            .then(response => resolve(response))
        })
    }
    //- Finalizo
}