
import { Component, OnInit } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import {  BehaviorSubject, Observable  } from 'rxjs'

import { UsuarioService } from '../../../servicios';
@Component({
  selector: 'perfilinversionista',
  templateUrl: './perfilinversionista.component.pug',
  styleUrls: [
      './perfilinversionista.component.styl'
  ]
})
export class PerfilinversionistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    //
    // pasarUsuario : BehaviorSubject<any>



    usuario: any = {}
    inversionista: any = {}
    proyectos: any = []

    constructor(public route : ActivatedRoute, private titleService: Title, private meta : Meta ) {


    route.params.subscribe(async (res) =>
        UsuarioService.one(Number(res.id))
        .then(response => this.usuario = response)
        .then(response => {
            UsuarioService.inversionistas(this.usuario.id)
            .then(response => {
                this.inversionista = response[0].Inversionista
                this.proyectos = response
                console.log(this.proyectos)
            })

            // this.pasarUsuario.next(response);

            this.titleService.setTitle( this.usuario.nombre );
        // this.meta.updateTag({ name: 'description', content: _.replace( this.proyecto.resumen, '<p>', '')  })
        // this.meta.updateTag({ name: 'keywords', content: 'pagina web, presupuesto web, cotizador online, cotizador paginas web, presupuesto tienda online,' + this.proyecto.nombre })

    }))


  }

  ngOnInit() {



  }
}