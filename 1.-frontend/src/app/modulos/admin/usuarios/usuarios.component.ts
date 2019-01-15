import { UsuarioService } from './../../../servicios/Usuario.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.pug',
  styleUrls: [
      './usuarios.component.styl'
  ]
})
export class UsuariosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}