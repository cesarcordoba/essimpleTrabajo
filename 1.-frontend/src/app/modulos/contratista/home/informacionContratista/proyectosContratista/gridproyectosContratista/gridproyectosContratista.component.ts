
import { Component, OnInit, Input } from '@angular/core';

import { ProyectoService } from '../../../../../../servicios';
@Component({
  selector: 'gridproyectosContratista',
  templateUrl: './gridproyectosContratista.component.pug',
  styleUrls: ['./gridproyectosContratista.component.styl']
})
export class GridproyectoscontratistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() proyectos
    color = 'primary';
    mode = 'determinate';
    value = 0;
    diameter = 150;

    color_fecha = 'warn';
    mode_fecha  = 'determinate';
    value_fecha  = 0;
    diameter_fecha  = 150;
    // proyectos = {
    //     items : []
    // }
    filtro : any;
    columnas = 3
    height = '300px'
    colspan = 1
    rowspan = 1
    habilitado: boolean = false
    valor : any
    metrica: any;

    constructor() {
    //     this.filtro = {
    //             pagina : 1,
    //             limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
    //             order : ['id'],
    //             where : {},
    //             include : []
    //         }

    // ProyectoService.paginacion(this.filtro)
    // .then(response => this.proyectos = response)

  }
  verMetricas(proyecto){
    
    this.valor=(proyecto.acumulado*100)/proyecto.meta
    this.dosDecimales(this.valor)
    this.value_fecha  = proyecto.plazo;
    this.metrica = proyecto;
    this.habilitado = true;
  }

  private dosDecimales(valor){
    let recorte =valor.toString();
    let regex=/(\d*.\d{0,2})/;
    this.value = recorte.match(regex)[0];
  }

  ngOnInit() {



  }
}