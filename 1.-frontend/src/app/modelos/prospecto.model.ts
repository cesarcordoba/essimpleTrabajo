
export class Prospecto {
    id: number;
    nombre: string;
    correo: string;
    empresa: string;
    numero: string;
    asunto: string;

    constructor(arg) {
        this.id = arg.id;
        this.nombre = arg.nombre;
        this.correo = arg.correo;
        this.empresa = arg.empresa;
        this.numero = arg.numero;
        this.asunto = arg.asunto;
    }

}
