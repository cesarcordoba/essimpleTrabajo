
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Inversionista } from '../modelos/Inversionista.model'
import * as axios from 'axios'

const url = APILOCAL.url

@Injectable()
export class InversionistaService {

    public static crear = (peticion) => axios.default.post( url + '/data/inversionista', peticion).then(response =>  new Inversionista( response.data ))
    public static obtener = () => axios.default.get( url + '/data/inversionista').then(response => response.data.map(n => new Inversionista( n )))
    public static one = (id) => axios.default.get( url + '/data/inversionista/' + id).then(response =>  new Inversionista( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/inversionista/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/inversionista/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/inversionista/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Inversionista( n ))}))


    //- Finalizo
}