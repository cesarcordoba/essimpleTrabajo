
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Subscripcion } from '../modelos/Subscripcion.model'
import * as axios from 'axios'

const url = APILOCAL.url

@Injectable()
export class SubscripcionService {
    
    public static crear = (peticion) => axios.default.post( url + '/data/subscripcion', peticion).then(response =>  new Subscripcion( response.data ))
    public static obtener = () => axios.default.get( url + '/data/subscripcion').then(response => response.data.map(n => new Subscripcion( n )))
    public static one = (id) => axios.default.get( url + '/data/subscripcion/' + id).then(response =>  new Subscripcion( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/subscripcion/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/subscripcion/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/subscripcion/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Subscripcion( n ))}))


    //- Finalizo
}