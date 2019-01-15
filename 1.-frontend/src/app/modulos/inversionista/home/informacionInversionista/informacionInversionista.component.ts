
import { Component, OnInit, Input } from '@angular/core';


//    2
import { UsuarioService } from '../../../../servicios';
@Component({
  selector: 'informacionInversionista',
  templateUrl: './informacionInversionista.component.pug',
  styleUrls: ['./informacionInversionista.component.styl']
})
export class InformacioninversionistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    usuarios: any
    @Input() proyectos
    @Input() fotoPerfil
    @Input() fotoAvatar

    constructor() {

    // UsuarioService.obtener()
    // .then(response => this.usuarios = response)
    // .then(response => console.log(response))

  }

  ngOnInit() {



  }
}