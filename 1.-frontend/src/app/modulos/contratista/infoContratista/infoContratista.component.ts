import { ContratistaRoutingModule } from './../contratista-routing.module';
import { ConstructoraService } from './../../../servicios/Constructora.service';
import { ArquitectoService } from './../../../servicios/Arquitecto.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {  BehaviorSubject, Observable  } from 'rxjs'

import { UsuarioService, AWSService, MultimediaService, ContratistaService, AuthService } from '../../../servicios';

@Component({
  selector: 'infoContratista',
  templateUrl: './infoContratista.component.pug',
  styleUrls: [
      './infoContratista.component.styl'
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [AWSService]
})
export class InfocontratistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    usuario: any = {}
    contratista: any;
    file: any;
    idMultimedia: any;
    arquitecto: any;
    constructora: any;
    edicion_usuario: boolean = false;
    edicion_contratista: boolean = false;
    edicion_extra: boolean = false;
    edicion_foto: boolean = false;
    carga: boolean = false;
    control: number = 1; //- Esta variable sirve para crear o editar la foto de perfil
    fotoPerfil: any = "assets/images/fotoPerfi.png";

    constructor(
        public route : ActivatedRoute, 
        private titleService: Title, 
        private meta : Meta,
        private fb: FormBuilder,
        private _aws: AWSService,
        private us: AuthService,
        public snackBar: MatSnackBar) {


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
                        this.edicion_foto = !this.edicion_foto
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
                    this.edicion_foto = !this.edicion_foto
                }
            }
        })
        
    }

  }

  editarFotoContratista(){

    this.edicion_foto = !this.edicion_foto

  }

  editarUsuario(){

    this.edicion_usuario = !this.edicion_usuario

  }
  editarContratista(){

    this.edicion_contratista = !this.edicion_contratista

  }
  editarExtras(){

    this.edicion_extra = !this.edicion_extra

  }

    guardarUsuario() {
        console.log(this.usuario)
        UsuarioService.editar(this.usuario)
        this.snackBar.open("Guardado Correctamente", "", { duration: 2000 });
        this.edicion_usuario = !this.edicion_usuario
    }

    guardarContratista() {
        
        ContratistaService.editar(this.contratista)
        this.snackBar.open("Guardado Correctamente", "", { duration: 2000 });
        this.edicion_contratista = !this.edicion_contratista
        // UsuarioService.editar(this.usuario)
        // this.snackBar.open("Guardado Correctamente", "", { duration: 1000 });
        // this.edicion_usuario = !this.edicion_usuario
    }

    guardarArquitecto() {
        ArquitectoService.editar(this.arquitecto)
        this.snackBar.open("Guardado Correctamente", "", { duration: 2000 });
        this.edicion_extra = !this.edicion_extra
        // UsuarioService.editar(this.usuario)
        // this.snackBar.open("Guardado Correctamente", "", { duration: 1000 });
        // this.edicion_usuario = !this.edicion_usuario
    }

    guardarConstructora() {
        ConstructoraService.editar(this.constructora)
        this.snackBar.open("Guardado Correctamente", "", { duration: 2000 });
        this.edicion_extra = !this.edicion_extra
        // UsuarioService.editar(this.usuario)
        // this.snackBar.open("Guardado Correctamente", "", { duration: 1000 });
        // this.edicion_usuario = !this.edicion_usuario
    }

  ngOnInit() {
        console.log('InfoContratista component works')
        this.us.obtenerUsuario().subscribe(user => {
            this.usuario = user
            console.log(this.usuario)
            UsuarioService.contratistas(this.usuario.id)
            .then(response => {
                console.log(response)
                this.contratista = response[0].Contratista

                if(this.contratista.tipo === "arquitecto"){
                    ContratistaService.arquitectos(this.contratista.id)
                    .then(response => this.arquitecto = response[0])
                }else{
                    ContratistaService.constructoras(this.contratista.id)
                    .then(response => this.constructora = response[0])
                }
            })

            //-ContratistaService.obtenerDatos(this.usuario.id).then(response => console.log(response) )

            MultimediaService.fotoPerfil(this.usuario.id)
            .then(response =>{
                this.idMultimedia = response[0].id
                this.fotoPerfil = response[0].link
                this.control = 2
                console.log(response)
            })
        })
        
  }

}