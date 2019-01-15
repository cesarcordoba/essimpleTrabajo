
import { Component, OnInit } from '@angular/core';


//    2
import { UsuarioService } from '../../../../servicios';
@Component({
  selector: 'usauriosproyecto',
  templateUrl: './usauriosproyecto.component.pug',
  styleUrls: ['./usauriosproyecto.component.styl']
})
export class UsauriosproyectoComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    usuarios: any

    constructor() {

    UsuarioService.obtener()
    .then(response => this.usuarios = response)
    .then(response => console.log(response))

  }

  ngOnInit() {



  }
}