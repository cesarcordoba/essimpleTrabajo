
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Arquitecto } from '../modelos/Arquitecto.model'
import * as axios from 'axios'

import { Contratista } from '../modelos/Contratista.model';
const url = APILOCAL.url

@Injectable()
export class ArquitectoService {

    public static crear = (peticion) => axios.default.post( url + '/data/arquitecto', peticion).then(response =>  new Arquitecto( response.data ))
    public static obtener = () => axios.default.get( url + '/data/arquitecto').then(response => response.data.map(n => new Arquitecto( n )))
    public static one = (id) => axios.default.get( url + '/data/arquitecto/' + id).then(response =>  new Arquitecto( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/arquitecto/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/arquitecto/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/arquitecto/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Arquitecto( n ))}))

    public static contratistas = id => axios.default.get( url + '/data/arquitecto/contratistas/' + id ).then(response => response.data.map(n => new Contratista( n )))
    public static ligarcontratista = (arquitecto , contratista) => axios.default.put( url + '/data/arquitecto-contratista/' + arquitecto + '/' + contratista )
    public static desligarcontratista = (arquitecto , contratista) => axios.default.delete( url + '/data/arquitecto-contratista/' + arquitecto + '/' + contratista )


    //- Finalizo
}