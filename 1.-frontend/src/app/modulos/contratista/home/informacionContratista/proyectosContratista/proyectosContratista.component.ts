
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'proyectosContratista',
  templateUrl: './proyectosContratista.component.pug',
  styleUrls: ['./proyectosContratista.component.styl']
})
export class ProyectoscontratistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyectos;
    constructor() {

  }

  ngOnInit() {



  }
}