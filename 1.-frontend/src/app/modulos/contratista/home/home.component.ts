
import { Component, OnInit } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import {  BehaviorSubject, Observable  } from 'rxjs'

import { UsuarioService, ContratistaService, MultimediaService } from '../../../servicios';
@Component({
  selector: 'home',
  templateUrl: './home.component.pug',
  styleUrls: [
      './home.component.styl'
  ]
})
export class HomeComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    //
    // pasarUsuario : BehaviorSubject<any>



    usuario: any = {}
    proyectos: any;
    fotoPerfil: any;

    constructor(public route : ActivatedRoute, private titleService: Title, private meta : Meta ) {


    route.params.subscribe(async (res) =>
        //-UsuarioService.one(Number(res.id))
        UsuarioService.one(Number(2))
        .then(response => this.usuario = response)
        .then(response => {
            UsuarioService.contratistas(this.usuario.id)
            .then(response => this.proyectos = response)
            MultimediaService.fotoPerfil(this.usuario.id)
            .then(response =>  this.fotoPerfil = response[0].link) 
            // this.pasarUsuario.next(response);
            this.titleService.setTitle( this.usuario.nombre );
        // this.meta.updateTag({ name: 'description', content: _.replace( this.proyecto.resumen, '<p>', '')  })
        // this.meta.updateTag({ name: 'keywords', content: 'pagina web, presupuesto web, cotizador online, cotizador paginas web, presupuesto tienda online,' + this.proyecto.nombre })

    }))


  }

  ngOnInit() {



  }
}