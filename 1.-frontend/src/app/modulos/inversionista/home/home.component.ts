
import { Component, OnInit } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import {  BehaviorSubject, Observable  } from 'rxjs'
import { UsuarioService, MultimediaService, AuthService } from '../../../servicios';

@Component({
  selector: 'home',
  templateUrl: './home.component.pug',
  styleUrls: [
      './home.component.styl'
  ]
})
export class HomeComponent implements OnInit {

    usuario: any = {}
    proyectos: any;
    fotoPerfil: any;
    fotoAvatar: any = "assets/images/fotoPerfi.png";
    constructor(public route : ActivatedRoute, private titleService: Title, private meta : Meta, private us: AuthService) {


    // route.params.subscribe(async (res) =>
    //     //-UsuarioService.one(Number(res.id))
    //     UsuarioService.one(Number(5))
    //     .then(response => this.usuario = response)
    //     .then(response => {
    //         UsuarioService.inversionistas(this.usuario.id)
    //         .then(response => this.proyectos = response)
    //         MultimediaService.fotoPerfil(this.usuario.id)
    //         .then(response =>  this.fotoPerfil = response[0].link)
    //         // this.pasarUsuario.next(response);
    //         this.titleService.setTitle( this.usuario.nombre );
    //     // this.meta.updateTag({ name: 'description', content: _.replace( this.proyecto.resumen, '<p>', '')  })
    //     // this.meta.updateTag({ name: 'keywords', content: 'pagina web, presupuesto web, cotizador online, cotizador paginas web, presupuesto tienda online,' + this.proyecto.nombre })

    // }))


  }

  ngOnInit() {

    this.us.obtenerUsuario().subscribe(user => {
        this.usuario = user
        if(this.usuario.avatares.length > 0){
            this.fotoAvatar = this.usuario.avatares[0].link
        }
       
        MultimediaService.fotoPerfil(this.usuario.id)
        .then(response => this.fotoPerfil = response[0].link)
        console.log(this.usuario.id)
        UsuarioService.inversionistas(this.usuario.id)
        .then(response => {
            this.proyectos = response
            console.log(response.data) 
        })
    
    })
  }
}