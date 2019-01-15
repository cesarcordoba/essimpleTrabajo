
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { UsuarioService } from '../../../../servicios';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'formularioInversionistas',
  templateUrl: './formularioInversionistas.component.pug',
  styleUrls: ['./formularioInversionistas.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioinversionistasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() usuario
    formulario: FormGroup;



    usuarios: any
    valid: boolean = false;

    constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {

        
        
  }

    editarInversionista() {
      this.valid = !this.valid

    }

    ngOnInit() {

    }


    aceptar(){

        UsuarioService.editar(this.usuario)
        this.snackBar.open("Guardado Correctamente", "", { duration: 1000 });
        this.valid = !this.valid

    }


}