import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Usuario } from '../modelos/Usuario.model'
import { Llave } from './../modelos/Llave.model';
import { Avatar } from '../modelos/Avatar.model';
import { Log } from '../modelos/Log.model';
import * as axios from 'axios'

import { Inversionista } from '../modelos/Inversionista.model';
import { Proyecto } from '../modelos/Proyecto.model';
import { Contratista } from '../modelos/Contratista.model';
const url = APILOCAL.url

@Injectable()
export class UsuarioService {

    public static crear = (peticion) => axios.default.post( url + '/data/usuario', peticion).then(response =>  new Usuario( response.data ))
    public static obtener = () => axios.default.get( url + '/data/usuario').then(response => response.data.map(n => new Usuario( n )))
    public static one = (id) => axios.default.get( url + '/data/usuario/' + id).then(response =>  new Usuario( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/usuario/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/usuario/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/usuario/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Usuario( n ))}))
    public static paginacionInversionista = peticion => axios.default.post( url + '/data/usuario/paginacionInversionista', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Usuario( n ))}))
    public static paginacionContratista = peticion => axios.default.post( url + '/data/usuario/paginacionContratista', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Usuario( n ))}))

    public static llaves = id => axios.default.get( url + '/data/usuario/llaves/' + id ).then(response => response.data.map(n => new Llave( n )))
    public static ligarllave = (usuario , llave) => axios.default.put( url + '/data/usuario-llave/' + usuario + '/' + llave )
    public static desligarllave = (usuario , llave) => axios.default.delete( url + '/data/usuario-llave/' + usuario + '/' + llave )

    public static avatares = id => axios.default.get( url + '/data/usuario/avatares/' + id ).then(response => response.data.map(n => new Avatar( n )))
    public static ligaravatar = (usuario , avatar) => axios.default.put( url + '/data/usuario-avatar/' + usuario + '/' + avatar )
    public static desligaravatar = (usuario , avatar) => axios.default.delete( url + '/data/usuario-avatar/' + usuario + '/' + avatar )

    public static logs = id => axios.default.get( url + '/data/usuario/logs/' + id ).then(response => response.data.map(n => new Log( n )))
    public static ligarlog = (usuario , log) => axios.default.put( url + '/data/usuario-log/' + usuario + '/' + log )
    public static desligarlog = (usuario , log) => axios.default.delete( url + '/data/usuario-log/' + usuario + '/' + log )
    
    public static inversionistas = id => axios.default.get( url + '/data/usuario/Inversionistas/' + id ).then(response => response.data.map(n => new Proyecto( n )))
    public static ligarinversionistas = (usuario , proyecto) => axios.default.put( url + '/data/usuario-proyecto/' + usuario + '/' + proyecto )
    public static desligarinversionistas = (usuario , proyecto) => axios.default.delete( url + '/data/usuario-proyecto/' + usuario + '/' + proyecto )

    public static buscar = (nombre) => axios.default.get(url + '/data/usuario/buscar', nombre)

    public static contratistas = id => axios.default.get( url + '/data/usuario/Contratistas/' + id ).then(response => response.data.map(n => new Proyecto( n )))
    public static ligarcontratistas = (usuario , proyecto) => axios.default.put( url + '/data/usuario-proyecto/' + usuario + '/' + proyecto )
    public static desligarcontratistas = (usuario , proyecto) => axios.default.delete( url + '/data/usuario-proyecto/' + usuario + '/' + proyecto )

    

    //- Finalizo
}