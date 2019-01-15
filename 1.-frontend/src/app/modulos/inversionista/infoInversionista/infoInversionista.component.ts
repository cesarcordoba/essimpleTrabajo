import { AuthService } from './../../../servicios/auth.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {  BehaviorSubject, Observable  } from 'rxjs'

import { UsuarioService, AWSService, MultimediaService} from '../../../servicios';
@Component({
  selector: 'infoInversionista',
  templateUrl: './infoInversionista.component.pug',
  styleUrls: [
      './infoInversionista.component.styl'
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [AWSService]
})
export class InfoinversionistaComponent implements OnInit {

    usuario: any = {}
    inversionista: any;
    edicion: boolean = false;
    carga: boolean = false;
    edicionFoto: boolean = false;
    file: any;
    idMultimedia: any;
    control: number = 1; //- Esta variable sirve para crear o editar la foto de perfil
    fotoPerfil: any = "assets/images/fotoPerfi.png";
    fotoAvatar: any = "assets/images/fotoPerfi.png";

    constructor(
        public route : ActivatedRoute, 
        private titleService: Title, 
        private meta : Meta, 
        private fb: FormBuilder,
        private _aws: AWSService,
        public snackBar: MatSnackBar,
        private us: AuthService) {

  }

  guardarFoto(){
    if(this.file === undefined){
        this.snackBar.open("No hay una imagen seleccionada", "", {duration: 1000});
    }else{
        this._aws.subirArchivo(this.file,"bull-imagenes", "esimple-perfiles/").subscribe(archivo => {
            if(archivo==true){
                this.carga = true;
            }else if(archivo==false){
                this.carga = false;
            }else{
                if(this.control === 1){
                    MultimediaService.crear({
                        link: archivo[0],
                        key: archivo[1],
                        tipo: this.usuario.id //- * <---AQUI REMPLAZAR POR LA VARIABLE QUE TENGA EL ID DEL USUARIO
                    })
                    .then(imagen =>this.fotoPerfil = imagen.link)
                    .then(algomas =>  {
                        this.carga = false
                        this.control = 2
                        this.edicionFoto = !this.edicionFoto
                    })
                    .then(final => 
                        MultimediaService.fotoPerfil(this.usuario.id)
                        .then(response =>this.idMultimedia = response[0].id))
                }else{
                    MultimediaService.editar({
                        id: this.idMultimedia,
                        link: archivo[0],
                        key: archivo[1],
                        tipo: this.usuario.id //- * <---AQUI REMPLAZAR POR LA VARIABLE QUE TENGA EL ID DEL USUARIO
                    })
                    .then(imagen => this.fotoPerfil = archivo[0])
                    .then(algomas =>  this.carga = false)
                    this.edicionFoto = !this.edicionFoto
                }
            }
        })
        
    }

  }

  editarFoto(){

    this.edicionFoto = !this.edicionFoto

  }
  editarInversionista(){

    this.edicion = !this.edicion

  }

    guardarUsuario() {
        UsuarioService.editar(this.usuario)
        this.snackBar.open("Guardado Correctamente", "", { duration: 1000 });
        this.edicion = !this.edicion
    }
  ngOnInit() {

    console.log('inversionista component works')
		this.us.obtenerUsuario().subscribe(user => {
            this.usuario = user
            if(Object.entries(this.usuario.avatares).length === 0){
                this.fotoAvatar = null
            }else{
                this.fotoAvatar = this.usuario.avatares[0].link
            }
            
            MultimediaService.fotoPerfil(this.usuario.id)
            .then(response =>{
                this.idMultimedia = response[0].id
                this.fotoPerfil = response[0].link
                this.control = 2
            })

        })


  }
}