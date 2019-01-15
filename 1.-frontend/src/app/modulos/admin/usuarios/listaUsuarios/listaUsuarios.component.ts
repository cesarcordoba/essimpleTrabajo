
import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../../../servicios';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDelDialogComponent } from '../../fragments/confirm-del-dialog/confirm-del-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'listaUsuarios',
  templateUrl: './listaUsuarios.component.pug',
  styleUrls: ['./listaUsuarios.component.styl']
})
export class ListausuariosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    formulario: FormGroup;
    usuario = {tipo:''}
    usuarios = {
        items : []
    }
    filtro : any;
    edicion: boolean = false;

    constructor(private _router: Router, private dialog: MatDialog, private fb: FormBuilder, public snack: MatSnackBar) {
        this.filtro = {
                pagina : 1,
                limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  10 :  3,
                order : ['id'],
                where : {},
                include : []
            }

    UsuarioService.paginacion(this.filtro)
    .then(response => this.usuarios = response)

  }

  submit(usuario){
    console.log(usuario)
    UsuarioService.crear(usuario)
    .then(response => {
      if(response){
        this.snack.open('Tipo de usuario. Guardado Correctamente', '', {
          duration: 2000,
        });
        this.formulario.reset();
      }else{
        this.snack.open('Ups! Al parecer hubo un problema al enviar los datos. Intente nuevamente!', '', {
          duration: 2000,
        });
      }
    })
  }

  editarTipo(){
      this.edicion = !this.edicion;
  }


  ngOnInit() {
    this.formulario = this.fb.group({
        tipo: [this.usuario.tipo, [Validators.required]],
      })


  }
}