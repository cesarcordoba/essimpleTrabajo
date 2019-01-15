
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beneficios',
  templateUrl: './beneficios.component.pug',
  styleUrls: [
      './beneficios.component.styl'
  ]
})
export class BeneficiosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}