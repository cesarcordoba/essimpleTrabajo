import * as _ from 'lodash';

import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';

// import { Imagen } from '../../modelos';

@Component({
	selector: 'imagen',
	templateUrl: './imagen.component.pug',
	styleUrls: ['./imagen.component.styl'],
	providers: [/* ImagenesService */],
	encapsulation: ViewEncapsulation.None
})

export class ImagenComponent implements OnInit {

	@Input() imagen: any;

	@Output() selectImagen = new EventEmitter();

	loader = false;
	mostrar = false;

	constructor(){
		
	}
	ngOnInit() {
		// console.log(this.id)
		// ImagenService.obtenerImagen(this.id)
		// 	.then(response => this.imagen = new Imagen(response.data.id, response.data.imagen, response.data.tipo))
		// 	.then(r => console.log(r))
	}

	cargando(){

	}

	eventClick(item) {

		this.mostrar = !this.mostrar;

	this.selectImagen.emit(item);
		
	}
}
