
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.pug',
  styleUrls: [
      './contacto.component.styl'
  ]
})
export class ContactoComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}