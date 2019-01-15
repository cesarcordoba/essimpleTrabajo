
import { LogService } from '../servicios/Log.service'

export class Log {
    id: number;


        usuario : any;

    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }



    obtenerUsuario(){
        return new Promise(resolve => {
            LogService.usuario(this.id)
            .then(response => this.usuario = response)
            .then(response => resolve(response))
        })
    }
    //- Finalizo
}