
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'informacionContratista',
  templateUrl: './informacionContratista.component.pug',
  styleUrls: ['./informacionContratista.component.styl']
})
export class InformacioncontratistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() proyectos;
    @Input() fotoPerfil;
    
    constructor() {

  }

  ngOnInit() {



  }
}