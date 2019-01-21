import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Servicio } from '../modelos/Servicio.model'
import * as axios from 'axios'

import { Inversionista } from '../modelos/Inversionista.model';
import { Proyecto } from '../modelos/Proyecto.model';
import { Contratista } from '../modelos/Contratista.model';
const url = APILOCAL.url

@Injectable()
export class ServicioService {

    public static crear = (peticion) => axios.default.post( url + '/data/servicio', peticion).then(response =>  new Servicio( response.data ))
    public static obtener = () => axios.default.get( url + '/data/servicio').then(response => response.data.map(n => new Servicio( n )))
    public static one = (id) => axios.default.get( url + '/data/servicio/' + id).then(response =>  new Servicio( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/servicio/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/servicio/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/servicio/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Servicio( n ))}))
    
    
    public static cantidades = id => axios.default.get( url + '/data/servicio/Cantidades/' + id ).then(response => response.data.map(n => new Proyecto( n )))
    public static ligarcantidades = (servicio , proyecto) => axios.default.put( url + '/data/servicio-proyecto/' + servicio + '/' + proyecto )
    public static desligarcantidades = (servicio , proyecto) => axios.default.delete( url + '/data/servicio-proyecto/' + servicio + '/' + proyecto )
    

    //- Finalizo
}