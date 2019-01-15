
import { Component, OnInit } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import {  BehaviorSubject, Observable  } from 'rxjs'
import { ProyectoService } from '../../../servicios';
@Component({
  selector: 'perfilproyectos',
  templateUrl: './perfilproyectos.component.pug',
  styleUrls: [
      './perfilproyectos.component.styl'
  ]
})
export class PerfilproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    //
    // pasarProyecto : BehaviorSubject<any>



    proyecto: any = {}
    variable: any
	options : {};

    constructor(public route : ActivatedRoute, private titleService: Title, private meta : Meta ) {


    route.params.subscribe(async (res) =>
        ProyectoService.one(Number(res.id))
        .then(response => this.proyecto = response)
        .then(response => {

            console.log(this.proyecto)
            // this.pasarProyecto.next(response);

            this.titleService.setTitle( this.proyecto.nombre );
        // this.meta.updateTag({ name: 'description', content: _.replace( this.proyecto.resumen, '<p>', '')  })
        // this.meta.updateTag({ name: 'keywords', content: 'pagina web, presupuesto web, cotizador online, cotizador paginas web, presupuesto tienda online,' + this.proyecto.nombre })

    }))


  }

  ngOnInit() {

    ProyectoService.froala().then(response => {
        console.log(response.data)
        this.options = {
            placeholderText: 'Escribe aqui',
            charCounterCount: false,
            imageUploadURL: false,
            theme: 'dark',
            imageUploadToS3: response.data
        }
    })



  }
}