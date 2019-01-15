
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inversionistas',
  templateUrl: './inversionistas.component.pug',
  styleUrls: [
      './inversionistas.component.styl'
  ]
})
export class InversionistasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}