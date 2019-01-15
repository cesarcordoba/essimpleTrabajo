
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Multimedia } from '../modelos/Multimedia.model'
import * as axios from 'axios'

import { Proyecto } from '../modelos/Proyecto.model';
const url = APILOCAL.url

@Injectable()
export class MultimediaService {

    public static crear = (peticion) => axios.default.post( url + '/data/multimedia', peticion).then(response =>  new Multimedia( response.data ))
    public static obtener = () => axios.default.get( url + '/data/multimedia').then(response => response.data.map(n => new Multimedia( n )))
    public static one = (id) => axios.default.get( url + '/data/multimedia/' + id).then(response =>  new Multimedia( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/multimedia/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/multimedia/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/multimedia/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Multimedia( n ))}))

    public static fotoPerfil = id => axios.default.get( url + '/data/multimedia/fotoPerfil/' + id ).then(response => response.data.map(n => new Multimedia( n )))
    public static xProyecto = id => axios.default.get( url + '/data/multimedia/xProyecto/' + id ).then(response => response.data.map(n => new Multimedia( n )))
    public static proyecto = id => axios.default.get( url + '/data/multimedia/proyecto/' + id ).then(response =>  new Proyecto( response.data ))


    //- Finalizo
}