
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Proyecto } from '../modelos/Proyecto.model'
import * as axios from 'axios'

import { Portada } from '../modelos/Portada.model';
import { Multimedia } from '../modelos/Multimedia.model';
import { Inversionista } from '../modelos/Inversionista.model';
import { Usuario } from '../modelos/Usuario.model';
import { Contratista } from '../modelos/Contratista.model';
const url = APILOCAL.url

@Injectable()
export class ProyectoService {

    public static crear = (peticion) => axios.default.post( url + '/data/proyecto', peticion).then(response =>  new Proyecto( response.data ))
    public static obtener = () => axios.default.get( url + '/data/proyecto').then(response => response.data.map(n => new Proyecto( n )))
    public static one = (id) => axios.default.get( url + '/data/proyecto/' + id).then(response =>  new Proyecto( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/proyecto/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/proyecto/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/proyecto/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Proyecto( n ))}))

    public static portadas = id => axios.default.get( url + '/data/proyecto/portadas/' + id ).then(response => response.data.map(n => new Portada( n )))
    public static ligarportada = (proyecto , portada) => axios.default.put( url + '/data/proyecto-portada/' + proyecto + '/' + portada )
    public static desligarportada = (proyecto , portada) => axios.default.delete( url + '/data/proyecto-portada/' + proyecto + '/' + portada )

    public static multimedias = id => axios.default.get( url + '/data/proyecto/multimedias/' + id ).then(response => response.data.map(n => new Multimedia( n )))
    public static ligarmultimedia = (proyecto , multimedia) => axios.default.put( url + '/data/proyecto-multimedia/' + proyecto + '/' + multimedia )
    public static desligarmultimedia = (proyecto , multimedia) => axios.default.delete( url + '/data/proyecto-multimedia/' + proyecto + '/' + multimedia )


    public static inversionistas = id => axios.default.get( url + '/data/proyecto/Inversionistas/' + id ).then(response => response.data.map(n => new Usuario( n )))
    public static ligarinversionistas = (proyecto , usuario) => axios.default.put( url + '/data/proyecto-usuario/' + proyecto + '/' + usuario )
    public static desligarinversionistas = (proyecto , usuario) => axios.default.delete( url + '/data/proyecto-usuario/' + proyecto + '/' + usuario )

    public static buscar = (nombre) => axios.default.get(url + '/data/proyecto/buscar', nombre)

    public static froala = () => axios.default.get(url + '/data/proyecto/froala')
    
    public static contratistas = id => axios.default.get( url + '/data/proyecto/Contratistas/' + id ).then(response => response.data.map(n => new Usuario( n )))
    public static ligarcontratistas = (proyecto , usuario) => axios.default.put( url + '/data/proyecto-usuario/' + proyecto + '/' + usuario )
    public static desligarcontratistas = (proyecto , usuario) => axios.default.delete( url + '/data/proyecto-usuario/' + proyecto + '/' + usuario )
    //- Finalizo
}