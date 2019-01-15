
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seccionGraficas',
  templateUrl: './seccionGraficas.component.pug',
  styleUrls: ['./seccionGraficas.component.styl']
})
export class SecciongraficasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}