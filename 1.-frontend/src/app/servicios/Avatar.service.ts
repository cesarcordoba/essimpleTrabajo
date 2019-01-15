
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Avatar } from '../modelos/Avatar.model'
import * as axios from 'axios'

import { Usuario } from '../modelos/Usuario.model';
const url = APILOCAL.url

@Injectable()
export class AvatarService {

    public static crear = (peticion) => axios.default.post( url + '/data/avatar', peticion).then(response =>  new Avatar( response.data ))
    public static obtener = () => axios.default.get( url + '/data/avatar').then(response => response.data.map(n => new Avatar( n )))
    public static one = (id) => axios.default.get( url + '/data/avatar/' + id).then(response =>  new Avatar( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/avatar/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/avatar/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/avatar/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Avatar( n ))}))

    public static xUsuario = id => axios.default.get( url + '/data/avatar/xUsuario/' + id ).then(response => response.data.map(n => new Avatar( n )))
    public static usuario = id => axios.default.get( url + '/data/avatar/usuario/' + id ).then(response =>  new Usuario( response.data ))


    //- Finalizo
}