import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ContactoService } from '../../../../../servicios';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'contactoFormulario',
  templateUrl: './contactoFormulario.component.pug',
  styleUrls: ['./contactoFormulario.component.styl']
})
export class ContactoformularioComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    contacto = {nombre:'',correo:'',empresa:'',mensaje:''}
    formulario: FormGroup;
    constructor(private fb: FormBuilder, public snack: MatSnackBar) {
    
        
        
  }

  submit(contacto){
    console.log(contacto)
    ContactoService.crear(contacto)
    .then(response => {
      if(response){
        this.snack.open('Gracias por su mensaje pronto nos contactaremos con usted !', '', {
          duration: 3000,
        });
        this.formulario.reset();
      }else{
        this.snack.open('Ups! Al parecer hubo un problema al enviar los datos. Intente nuevamente!', '', {
          duration: 3000,
        });
      }
    })
  }

    ngOnInit() {
      this.formulario = this.fb.group({
        nombre: [this.contacto.nombre, [Validators.required]],
        //-correo: ['', [Validators.required, Validators.email]],
        correo: [this.contacto.correo, [Validators.required]],
        empresa: [this.contacto.empresa, [Validators.required]],
        mensaje: [this.contacto.mensaje, [Validators.required]]
      })
    }

   
}