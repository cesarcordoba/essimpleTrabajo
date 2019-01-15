
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { SubscripcionService } from '../../../../servicios';

@Component({
  selector: 'seccionRegistro',
  templateUrl: './seccionRegistro.component.pug',
  styleUrls: ['./seccionRegistro.component.styl']
})
export class SeccionregistroComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    subscriptor = {suscriptor:''}
    formulario: FormGroup;
    constructor(private fb: FormBuilder, public snack: MatSnackBar) {

  }

  submit(subscriptor){
    console.log(subscriptor)
    SubscripcionService.crear(subscriptor)
    .then(response => {
      this.snack.open("Gracias por suscribirte", "cerrar", { duration: 2500 })
      this.formulario.reset();
    } )
    
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      suscriptor: [this.subscriptor.suscriptor, [Validators.required]],
    })

  }
}