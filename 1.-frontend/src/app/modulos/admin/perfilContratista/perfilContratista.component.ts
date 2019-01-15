import { Arquitecto } from './../../../../../../2.-backend/server/http/arquitecto/modelo';

import { Component, OnInit } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import {  BehaviorSubject, Observable  } from 'rxjs'

import { UsuarioService, ContratistaService } from '../../../servicios';
@Component({
  selector: 'perfilContratista',
  templateUrl: './perfilContratista.component.pug',
  styleUrls: [
      './perfilContratista.component.styl'
  ]
})
export class PerfilcontratistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    //
    // pasarUsuario : BehaviorSubject<any>



    usuario: any = {}
    contratista: any = {}
    constructora: any = {}
    arquitecto: any = {}
    proyectos: any =[]

    constructor(public route : ActivatedRoute, private titleService: Title, private meta : Meta ) {


    route.params.subscribe(async (res) =>
        UsuarioService.one(Number(res.id))
        .then(response => this.usuario = response)
        .then(response => {
            UsuarioService.contratistas(this.usuario.id)
            .then(response => {
                this.contratista = response[0].Contratista
                this.proyectos = response
                if(this.contratista.tipo === "arquitecto")
                    ContratistaService.arquitectos(this.contratista.id)
                    .then(response => {this.arquitecto = response[0]; this.constructora = null})
                else
                    ContratistaService.constructoras(this.contratista.id)
                    .then(response => {this.constructora = response[0]; this.arquitecto = null})

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