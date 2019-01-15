
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seccionTotales',
  templateUrl: './seccionTotales.component.pug',
  styleUrls: ['./seccionTotales.component.styl']
})
export class SecciontotalesComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}