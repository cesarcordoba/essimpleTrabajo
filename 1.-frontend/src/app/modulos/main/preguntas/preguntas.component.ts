
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'preguntas',
  templateUrl: './preguntas.component.pug',
  styleUrls: [
      './preguntas.component.styl'
  ]
})
export class PreguntasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}