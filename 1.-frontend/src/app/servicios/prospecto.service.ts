
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Prospecto } from '../modelos/prospecto.model'
import * as ax from 'axios'
var axios = ax.default;

@Injectable()
export class ProspectoService {
    private static apiUrl: string = APILOCAL.url;

    /**
     * Retorna una promesa del objeto obtenido
     * @param idProspecto
     * @returns {Promise<Prospecto>}
     */
    public static obtenerProspecto(idProspecto: number) {
        return axios.get(this.apiUrl + '/data/prospecto/' + idProspecto)
            .then(response => response && response.data ? new Prospecto(response.data) : null);
    }

    /**
     * Retorna una promesa de arrays de objetos obetenidos
     * @returns {Promise<Prospecto[]>}
     */    
    public static obtenerProspectos() {
        return axios.get(this.apiUrl + '/data/prospecto/')
            .then(response => response && response.data ? response.data.map(n => new Prospecto(n)) : []);
    }

    /**
     * Retorna una promesa del objeto creado
     * @param prospecto
     * @returns {Promise<Prospecto>}
     */    
    public static crearProspecto(prospecto: Prospecto) {
        return axios.post(this.apiUrl + '/data/prospecto/', prospecto)
            .then(response => response && response.data ? new Prospecto(response.data) : null);
    }

    /**
     * Retorna una promesa con un mensaje
     * @param prospecto
     * @returns {msj: 'SUCCESS!'}
     */     
    public static actualizarProspecto(prospecto: Prospecto) {
        return axios.put(this.apiUrl + '/data/prospecto/' + prospecto.id, prospecto)
            .then(response => response && response.data ? response.data : null);
    }

    /**
     * Retorna una promesa del objeto eliminado
     * @param idProspecto
     * @returns {Promise<Prospecto>}
     */
    public static eliminarProspecto(idProspecto: number) {
        return axios.delete(this.apiUrl + '/data/prospecto/' + idProspecto)
            .then(response => response && response.data ? new Prospecto(response.data) : null);
    }
}