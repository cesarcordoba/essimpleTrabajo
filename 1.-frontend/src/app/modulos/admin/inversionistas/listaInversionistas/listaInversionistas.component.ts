
import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../../../servicios';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDelDialogComponent } from '../../fragments/confirm-del-dialog/confirm-del-dialog.component';
@Component({
  selector: 'listaInversionistas',
  templateUrl: './listaInversionistas.component.pug',
  styleUrls: ['./listaInversionistas.component.styl']
})
export class ListainversionistasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    usuarios = {
        items : []
    }
    filtro : any;

    constructor(private _router: Router, private dialog: MatDialog) {
        this.filtro = {
                pagina : 1,
                limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  10 :  3,
                order : ['id'],
                where : {},
                include : []
            }

    UsuarioService.paginacionInversionista(this.filtro)
    .then(response => this.usuarios = response)

  }

  mandarAInversionista(id){
    this._router.navigate(['/admin/inversionista/' + id]);
  }

  borrarInversionista(usuario){

    this.dialog.open(ConfirmDelDialogComponent,{
        width: '290px',
        height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
            UsuarioService.eliminar(usuario.id)
            .then(response => this.usuarios.items.splice(this.usuarios.items.indexOf(usuario),1))
            : null;
        });

  }

  ngOnInit() {



  }
}