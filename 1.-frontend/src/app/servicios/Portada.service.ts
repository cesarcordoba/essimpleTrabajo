
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Portada } from '../modelos/Portada.model'
import * as axios from 'axios'

import { Proyecto } from '../modelos/Proyecto.model';
const url = APILOCAL.url

@Injectable()
export class PortadaService {

    public static crear = (peticion) => axios.default.post( url + '/data/portada', peticion).then(response =>  new Portada( response.data ))
    public static obtener = () => axios.default.get( url + '/data/portada').then(response => response.data.map(n => new Portada( n )))
    public static one = (id) => axios.default.get( url + '/data/portada/' + id).then(response =>  new Portada( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/portada/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/portada/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/portada/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Portada( n ))}))

    public static xProyecto = id => axios.default.get( url + '/data/portada/xProyecto/' + id ).then(response => response.data.map(n => new Portada( n )))
    public static proyecto = id => axios.default.get( url + '/data/portada/proyecto/' + id ).then(response =>  new Proyecto( response.data ))


    //- Finalizo
}