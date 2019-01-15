
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proyectosRelacionadosContratista',
  templateUrl: './proyectosRelacionadosContratista.component.pug',
  styleUrls: ['./proyectosRelacionadosContratista.component.styl']
})
export class ProyectosrelacionadoscontratistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}