import { ProyectoService } from './../../../servicios/Proyecto.service';
import { unicode } from './../../../../../../starconsole/nasa/transbordadores/bower_components/font-awesome/advanced-options/use-with-node-js/free-regular-svg-icons/faClone.d';
import { Contratista } from './../../../modelos/Contratista.model';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import {  BehaviorSubject, Observable  } from 'rxjs'

@Component({
  selector: 'perfilProyectosMain',
  templateUrl: './perfilProyectosMain.component.pug',
  styleUrls: [
      './perfilProyectosMain.component.styl'
  ],
  encapsulation: ViewEncapsulation.None
})
export class PerfilproyectosmainComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    //
    // pasarProyecto : BehaviorSubject<any>



    proyecto: any = {}
    usuario: any

    constructor(public route : ActivatedRoute, private titleService: Title, private meta : Meta ) {


    route.params.subscribe(async (res) =>
        ProyectoService.one(Number(res.id))
        .then(response => this.proyecto = response)
        .then(response => {
            ProyectoService.contratistas(this.proyecto.id)
            .then(response => {this.usuario = response[0]; console.log(response)})
            console.log(response)

            // this.pasarProyecto.next(response);

            this.titleService.setTitle( this.proyecto.nombre );
        // this.meta.updateTag({ name: 'description', content: _.replace( this.proyecto.resumen, '<p>', '')  })
        // this.meta.updateTag({ name: 'keywords', content: 'pagina web, presupuesto web, cotizador online, cotizador paginas web, presupuesto tienda online,' + this.proyecto.nombre })

    }))


  }

  ngOnInit() {



  }
}