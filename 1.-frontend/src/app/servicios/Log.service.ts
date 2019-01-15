
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Log } from '../modelos/Log.model'
import * as axios from 'axios'

import { Usuario } from '../modelos/Usuario.model';
const url = APILOCAL.url

@Injectable()
export class LogService {

    public static crear = (peticion) => axios.default.post( url + '/data/log', peticion).then(response =>  new Log( response.data ))
    public static obtener = () => axios.default.get( url + '/data/log').then(response => response.data.map(n => new Log( n )))
    public static one = (id) => axios.default.get( url + '/data/log/' + id).then(response =>  new Log( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/log/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/log/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/log/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Log( n ))}))

    public static xUsuario = id => axios.default.get( url + '/data/log/xUsuario/' + id ).then(response => response.data.map(n => new Log( n )))
    public static usuario = id => axios.default.get( url + '/data/log/usuario/' + id ).then(response =>  new Usuario( response.data ))


    //- Finalizo
}