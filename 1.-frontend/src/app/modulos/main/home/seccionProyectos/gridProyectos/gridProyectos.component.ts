
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ProyectoService } from '../../../../../servicios';
import { Router } from '@angular/router';
@Component({
  selector: 'gridProyectos',
  templateUrl: './gridProyectos.component.pug',
  styleUrls: ['./gridProyectos.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class GridproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() proyectos;

    columnas = 4
    height = '450px'
    colspan = 1
    rowspan = 1

    constructor(private _router: Router) {


  }

  mandarAProyecto(id){
    this._router.navigate(['/proyecto/' + id]);
  }

  ngOnInit() {



  }
}