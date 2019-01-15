import { ProyectoService } from './../../../servicios/Proyecto.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
//-import { ProyectoService } from 'src/app/servicios';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.pug',
  styleUrls: [
      './proyectos.component.styl'
  ]
})
export class ProyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


  proyectos = {
    items : []
  }

    constructor(private dialog: MatDialog) {

  }

  nuevoProyecto(){
        this.dialog.open(NuevoProyectoComponent ,{
        width: '290px',
        height: '200px'
    }).afterClosed().subscribe(result => {
        result ?
            ProyectoService.crear(result)
            .then(response => this.proyectos.items.push(response))
        : null;

    });
  }

  ngOnInit() {

    console.log( this.borde )

  }
}