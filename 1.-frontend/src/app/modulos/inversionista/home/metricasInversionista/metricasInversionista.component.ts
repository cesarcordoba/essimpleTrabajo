
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'metricasInversionista',
  templateUrl: './metricasInversionista.component.pug',
  styleUrls: ['./metricasInversionista.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class MetricasinversionistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyecto

    color = 'primary';
    mode = 'determinate';
    value = 0;
    diameter = 150;

    color_fecha = 'warn';
    mode_fecha  = 'determinate';
    value_fecha  = 0;
    diameter_fecha  = 150;

    constructor() {

  }

  subir(){
    this.value = 95;
    this.value_fecha = 80;
  }

  otro(){
    this.value = 55;
    this.value_fecha = 10;
  }

  ngOnInit() {



  }
}