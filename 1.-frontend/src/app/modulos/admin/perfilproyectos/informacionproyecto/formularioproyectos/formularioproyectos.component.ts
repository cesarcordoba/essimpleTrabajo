import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProyectoService } from '../../../../../servicios';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'formularioproyectos',
	templateUrl: './formularioproyectos.component.pug',
	styleUrls: ['./formularioproyectos.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class FormularioproyectosComponent implements OnInit {

	borde = false ? { 'border-color': 'rgb(76, 175, 80)' } : { 'border-color': 'rgb(244, 67, 54)' }

	@Input() proyecto

	variable: any
	@Input() options : {};
	formulario: FormGroup;
	valid: boolean = true;
	

	proyectos: any

	constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {
		
	}

	editar() {

		this.valid = !this.valid

	}

	ngOnInit() {
	}


	aceptar() {

		console.log(this.proyecto)

		ProyectoService.editar(this.proyecto)
		this.snackBar.open("Guardado Correctamente", "cerrar", { duration: 1000 });
		this.valid = !this.valid
	}


}