
import { Component, OnInit, Input } from '@angular/core';


//    2
@Component({
  selector: 'informacionproyecto',
  templateUrl: './informacionproyecto.component.pug',
  styleUrls: ['./informacionproyecto.component.styl']
})
export class InformacionproyectoComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyectos

    @Input() options

    constructor() {

  }

  ngOnInit() {


  }
}