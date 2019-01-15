
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.pug',
  styleUrls: [
      './home.component.styl'
  ]
})
export class HomeComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}