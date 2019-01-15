import { ConfirmDelDialogComponent } from './../../fragments/confirm-del-dialog/confirm-del-dialog.component';

import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { AuthService } from './../../../../servicios/auth.service';
import { UsuarioService } from '../../../../servicios';

@Component({
  selector: 'informacionProyecto',
  templateUrl: './informacionProyecto.component.pug',
  styleUrls: ['./informacionProyecto.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class InformacionproyectoComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyecto;
    @Input() usuario;
    

    color = 'warn';
    mode = 'determinate';
    value = 60;
    registrado: any

    constructor(public _dialog: MatDialog, public snackBar: MatSnackBar, private us: AuthService) {

  }

  inversion(){
    this._dialog.open(ConfirmDelDialogComponent, {
      disableClose: true,
    }).afterClosed().subscribe(result => {

      if (result) {

        UsuarioService.ligarinversionistas(this.registrado.id, this.proyecto.id)
        .then(response => console.log(response))

        //-this.snackBar.open("Guardado Correctamente", "cerrar", { duration: 1000 });
      }
    });

  }

  ngOnInit() {

    this.us.obtenerUsuario().subscribe(user => {
      this.registrado = user
  })



  }
}