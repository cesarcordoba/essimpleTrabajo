
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Constructora } from '../modelos/Constructora.model'
import * as axios from 'axios'

import { Contratista } from '../modelos/Contratista.model';
const url = APILOCAL.url

@Injectable()
export class ConstructoraService {

    public static crear = (peticion) => axios.default.post( url + '/data/constructora', peticion).then(response =>  new Constructora( response.data ))
    public static obtener = () => axios.default.get( url + '/data/constructora').then(response => response.data.map(n => new Constructora( n )))
    public static one = (id) => axios.default.get( url + '/data/constructora/' + id).then(response =>  new Constructora( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/constructora/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/constructora/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/constructora/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Constructora( n ))}))

    public static contratistas = id => axios.default.get( url + '/data/constructora/contratistas/' + id ).then(response => response.data.map(n => new Contratista( n )))
    public static ligarcontratista = (constructora , contratista) => axios.default.put( url + '/data/constructora-contratista/' + constructora + '/' + contratista )
    public static desligarcontratista = (constructora , contratista) => axios.default.delete( url + '/data/constructora-contratista/' + constructora + '/' + contratista )


    //- Finalizo
}