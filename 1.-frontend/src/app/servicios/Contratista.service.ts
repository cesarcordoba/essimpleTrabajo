
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Contratista } from '../modelos/Contratista.model'
import * as axios from 'axios'

import { Arquitecto } from '../modelos/Arquitecto.model';
import { Constructora } from '../modelos/Constructora.model';
const url = APILOCAL.url

@Injectable()
export class ContratistaService {

    public static crear = (peticion) => axios.default.post( url + '/data/contratista', peticion).then(response =>  new Contratista( response.data ))
    public static obtener = () => axios.default.get( url + '/data/contratista').then(response => response.data.map(n => new Contratista( n )))
    public static one = (id) => axios.default.get( url + '/data/contratista/' + id).then(response =>  new Contratista( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/contratista/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/contratista/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/contratista/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Contratista( n ))}))

    public static arquitectos = id => axios.default.get( url + '/data/contratista/arquitectos/' + id ).then(response => response.data.map(n => new Arquitecto( n )))
    public static ligararquitecto = (contratista , arquitecto) => axios.default.put( url + '/data/contratista-arquitecto/' + contratista + '/' + arquitecto )
    public static desligararquitecto = (contratista , arquitecto) => axios.default.delete( url + '/data/contratista-arquitecto/' + contratista + '/' + arquitecto )

    public static constructoras = id => axios.default.get( url + '/data/contratista/constructoras/' + id ).then(response => response.data.map(n => new Constructora( n )))
    public static ligarconstructora = (contratista , constructora) => axios.default.put( url + '/data/contratista-constructora/' + contratista + '/' + constructora )
    public static desligarconstructora = (contratista , constructora) => axios.default.delete( url + '/data/contratista-constructora/' + contratista + '/' + constructora )

    public static agregarProyecto = (id, peticion) => axios.default.put( url + '/data/agregarProyecto/' + id , peticion)
    public static obtenerDatos = (id) => axios.default.get( url + '/data/obtenerDatos/' + id).then(response =>  new Contratista( response.data ))

    //- Finalizo
}