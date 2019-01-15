
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proyectosRelacionadosInversionista',
  templateUrl: './proyectosRelacionadosInversionista.component.pug',
  styleUrls: ['./proyectosRelacionadosInversionista.component.styl']
})
export class ProyectosrelacionadosinversionistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}