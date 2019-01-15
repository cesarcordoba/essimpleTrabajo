
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metricasContratistas',
  templateUrl: './metricasContratistas.component.pug',
  styleUrls: ['./metricasContratistas.component.styl']
})
export class MetricascontratistasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}