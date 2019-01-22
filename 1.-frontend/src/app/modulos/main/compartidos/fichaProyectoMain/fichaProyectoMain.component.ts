import { Proyecto } from './../../../../../../../2.-backend/server/http/proyecto/modelo';

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService, AuthService } from '../../../../servicios';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDelDialogComponent } from './../../fragments/confirm-del-dialog/confirm-del-dialog.component';
import { UsuarioService } from '../../../../servicios';
@Component({
  selector: 'fichaProyectoMain',
  templateUrl: './fichaProyectoMain.component.pug',
  styleUrls: ['./fichaProyectoMain.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class FichaproyectomainComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyecto

    color = 'warn';
    mode = 'determinate';
    value : any;
    registrado: any
    constructor(private _router: Router, public _dialog: MatDialog, public snackBar: MatSnackBar, private us: AuthService) {

  }

  inversion(){
    this._dialog.open(ConfirmDelDialogComponent, {
      disableClose: true,
    }).afterClosed().subscribe(result => {

      if (result) {

        UsuarioService.ligarinversionistas(this.registrado.id, this.proyecto.id)
        .then(response => {console.log(response)})

        this.snackBar.open("Guardado Correctamente", "cerrar", { duration: 1000 });
      }
    });

  }

  mandarAProyecto(){
    this._router.navigate(['/proyecto/' + this.proyecto.id]);
  }

  ngOnInit() {
  
      this.value = Math.round((this.proyecto.acumulado * 100) / this.proyecto.meta)
    
      this.us.obtenerUsuario().subscribe(user => this.registrado = user)
  }
}