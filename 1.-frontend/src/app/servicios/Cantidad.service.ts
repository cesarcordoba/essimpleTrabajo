import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Cantidad } from '../modelos/Cantidad.model'
import * as axios from 'axios'

const url = APILOCAL.url

@Injectable()
export class CantidadService {

    public static crear = (peticion) => axios.default.post( url + '/data/cantidad', peticion).then(response =>  new Cantidad( response.data ))
    public static obtener = () => axios.default.get( url + '/data/cantidad').then(response => response.data.map(n => new Cantidad( n )))
    public static one = (id) => axios.default.get( url + '/data/cantidad/' + id).then(response =>  new Cantidad( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/cantidad/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/cantidad/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/cantidad/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Cantidad( n ))}))


    //- Finalizo
}