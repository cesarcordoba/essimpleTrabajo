
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Contacto } from '../modelos/Contacto.model'
import * as axios from 'axios'

const url = APILOCAL.url

@Injectable()
export class ContactoService {

    public static crear = (peticion) => axios.default.post( url + '/data/contacto', peticion).then(response =>  new Contacto( response.data ))
    public static obtener = () => axios.default.get( url + '/data/contacto').then(response => response.data.map(n => new Contacto( n )))
    public static one = (id) => axios.default.get( url + '/data/contacto/' + id).then(response =>  new Contacto( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/contacto/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/contacto/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/contacto/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Contacto( n ))}))


    //- Finalizo
}