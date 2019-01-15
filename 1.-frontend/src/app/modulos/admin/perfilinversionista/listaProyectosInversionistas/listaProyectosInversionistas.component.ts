
import { Component, OnInit, Input } from '@angular/core';

import { ProyectoService } from '../../../../servicios';
@Component({
  selector: 'listaProyectosInversionistas',
  templateUrl: './listaProyectosInversionistas.component.pug',
  styleUrls: ['./listaProyectosInversionistas.component.styl']
})
export class ListaproyectosinversionistasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() proyectos;
    @Input() inversionista;
    // proyectos = {
    //     items : []
    // }
    filtro : any;

    constructor() {
        this.filtro = {
                pagina : 1,
                limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  10 :  3,
                order : ['id'],
                where : {},
                include : []
            }

    // ProyectoService.paginacion(this.filtro)
    // .then(response => this.proyectos = response)

  }

  ngOnInit() {



  }
}