
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contratistas',
  templateUrl: './contratistas.component.pug',
  styleUrls: [
      './contratistas.component.styl'
  ]
})
export class ContratistasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}