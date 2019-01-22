import { ProyectoService } from './../../../../servicios/Proyecto.service';
import { ConfirmDelDialogComponent } from './../../fragments/confirm-del-dialog/confirm-del-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AuthService } from './../../../../servicios/auth.service';
import { UsuarioService } from '../../../../servicios';

@Component({
  selector: 'seccionNosotrosProyectos',
  templateUrl: './seccionNosotrosProyectos.component.pug',
  styleUrls: ['./seccionNosotrosProyectos.component.styl']
})
export class SeccionnosotrosproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    proyectos = [];
    items: any;
    registrado: any
    constructor(public _dialog: MatDialog, public snackBar: MatSnackBar, private us: AuthService) {

  }
  inversion(idProyecto){
    console.log(idProyecto)
    this._dialog.open(ConfirmDelDialogComponent, {
      disableClose: true,
    }).afterClosed().subscribe(result => {

      if (result) {

        UsuarioService.ligarinversionistas(this.registrado.id, idProyecto)
        .then(response => {console.log(response)})

        this.snackBar.open("Guardado Correctamente", "cerrar", { duration: 1000 });
      }
    });

  }

  ngOnInit() {

    ProyectoService.obtener()
    .then(response => this.items = response)
    .then(cambiar => this.obtenerRandoms(2, this.items))

    this.us.obtenerUsuario().subscribe(user => this.registrado = user)
    
  }

  private obtenerRandoms(numero, array){
    while(this.proyectos.length < numero){
      let proyectito = this.calcularRandom(array)
      if(this.proyectos.indexOf(proyectito) == -1) this.proyectos.push(proyectito);
    }
  }

  private calcularRandom(array){
    return array[Math.floor(Math.random()*array.length)]
  }
}