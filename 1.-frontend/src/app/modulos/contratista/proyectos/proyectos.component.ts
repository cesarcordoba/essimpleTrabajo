import { UsuarioService } from './../../../servicios/Usuario.service';
import { ProyectoService } from './../../../servicios/Proyecto.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
//-import { ProyectoService } from 'src/app/servicios';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { AuthService } from '../../../servicios';


@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.pug',
  styleUrls: [
      './proyectos.component.styl'
  ]
})
export class ProyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

  usuario: any = {}
  proyectos = {
    items : []
  }

    constructor(private dialog: MatDialog, private us: AuthService) {

  }


  ngOnInit() {
    
    this.us.obtenerUsuario().subscribe(user => {
      this.usuario = user
      console.log(this.usuario)})
  }
}