
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Llave } from '../modelos/Llave.model'
import * as axios from 'axios'

import { Usuario } from '../modelos/Usuario.model';
const url = APILOCAL.url

@Injectable()
export class LlaveService {

    public static crear = (peticion) => axios.default.post( url + '/data/llave', peticion).then(response =>  new Llave( response.data ))
    public static obtener = () => axios.default.get( url + '/data/llave').then(response => response.data.map(n => new Llave( n )))
    public static one = (id) => axios.default.get( url + '/data/llave/' + id).then(response =>  new Llave( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/llave/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/llave/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/llave/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Llave( n ))}))

    public static xUsuario = id => axios.default.get( url + '/data/llave/xUsuario/' + id ).then(response => response.data.map(n => new Llave( n )))
    public static usuario = id => axios.default.get( url + '/data/llave/usuario/' + id ).then(response =>  new Usuario( response.data ))


    //- Finalizo
}