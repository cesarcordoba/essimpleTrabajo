
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.pug',
  styleUrls: [
      './nosotros.component.styl'
  ]
})
export class NosotrosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}