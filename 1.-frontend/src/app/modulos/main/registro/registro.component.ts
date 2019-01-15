import { ArquitectoService } from './../../../servicios/Arquitecto.service';
import { Constructora } from './../../../../../../2.-backend/server/http/constructora/modelo';
import { ConstructoraService } from './../../../servicios/Constructora.service';
import { ContratistaService } from './../../../servicios/Contratista.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../servicios/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsuarioService } from '../../../servicios';
// import { GoogleMaps, Marker } from '../../../modelos/google-maps.model';
import { Router } from '@angular/router';

// import { google } from "google-maps";

import * as _ from 'lodash'


@Component({
    selector: 'registro',
    templateUrl: 'registro.component.pug',
    styleUrls: ['registro.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class RegistroComponent implements OnInit, AfterViewInit {

    usuario : any
    contratista : any
    constructoras : any
    arquitectos : any
    segundoFormGroup: FormGroup;
    terceroFormGroup: FormGroup;
    registroContratistaForm: FormGroup;
    registroConstructoraForm: FormGroup;
    registroArquitectoForm: FormGroup;
    checked = false;
    arquitecto: number = 0
    constructora: number = 0
    constructor(
        private auth : AuthService,
        private formBuilder: FormBuilder,
    	private router: Router
    ){

        this.auth.obtenerUsuario()
        .subscribe(response => this.usuario = response)

    }


    ngOnInit(){

        this.registroContratistaForm = this.formBuilder.group({
            direccion: ['', Validators.required],
            telefono: ['', Validators.required],
            paginaWeb: ['', Validators.required],
            numPromAnaualCasas: ['', Validators.required],
            costoPromedio: ['', Validators.required],
            volumen: ['', Validators.required],
		});

        this.registroArquitectoForm = this.formBuilder.group({
            cedula: ['', Validators.required]
        });
        
        this.registroConstructoraForm = this.formBuilder.group({
            nombreConstructora: ['', Validators.required],
            director: ['', Validators.required],
            direccion: ['', Validators.required],
            fecha_constitucion: ['', Validators.required],
            rfc: ['', Validators.required]
		});


    }

    registrarContratista(form: FormGroup){

        console.log("me voy del paso 1")
        if (form.controls.direccion.valid &&
            form.controls.telefono.valid &&
            form.controls.paginaWeb.valid &&
            form.controls.numPromAnaualCasas.valid &&
            form.controls.costoPromedio.valid &&
            form.controls.volumen.valid) {

            let contratista = {
                direccion: form.controls.direccion.value,
                telefono: form.controls.telefono.value,
                paginaWeb: form.controls.paginaWeb.value,
                numPromAnaualCasas: form.controls.numPromAnaualCasas.value,
                costoPromedio: form.controls.costoPromedio.value,
                volumen: form.controls.volumen.value,
                tipo: "contratista",
                IdUsuario: this.usuario.id
                }

            ContratistaService.crear(contratista)
            .then(response => this.contratista = response)
            }
            UsuarioService.editar({id:this.usuario.id, tipo: 'contratista'})
    }

    registrarConstructora(form: FormGroup){

        console.log("me voy del paso 2 *CONSTRUCTORA*")

        if (form.controls.nombreConstructora.valid &&
            form.controls.director.valid &&
            form.controls.direccion.valid &&
            form.controls.fecha_constitucion.valid &&
            form.controls.rfc.valid) {

            let constructora = {
                nombreConstructora: form.controls.nombreConstructora.value,
                director: form.controls.director.value,
                direccion: form.controls.direccion.value,
                fecha_constitucion: form.controls.fecha_constitucion.value,
                rfc: form.controls.rfc.value
                }

                ContratistaService.editar({id:this.contratista.id, tipo: 'constructora'})

                ConstructoraService.crear(constructora)
                .then(response => {
                    this.constructoras = response
                    ConstructoraService.ligarcontratista(this.constructoras.id, this.contratista.id)
                    .then(response => this.router.navigate(['contratista']))
                })

                

            }

            
    }

    registrarArquitecto(form: FormGroup){

        console.log("me voy del paso 2 *ARQUITECTO*")

        if (form.controls.cedula.valid) {
            let arquitecto = {
                cedula: form.controls.cedula.value
                }

                ContratistaService.editar({id:this.contratista.id, tipo: 'arquitecto'})

                ArquitectoService.crear(arquitecto)
                .then(response => {
                    this.arquitectos = response
                    ArquitectoService.ligarcontratista(this.arquitectos.id, this.contratista.id)
                    .then(response => this.router.navigate(['contratista']))
                })

            }
    }

    activar(activado){
        if(activado === true){
            this.arquitecto = 1
            this.constructora = 0

        }
        console.log(this.arquitecto)
        console.log(this.constructora)

    }

    activar2(activado){
        if(activado === true){
            this.arquitecto = 0
            this.constructora = 1
        }
        console.log(this.arquitecto)
        console.log(this.constructora)
    }


    ngAfterViewInit(): void {

    }

    acepto(){
        UsuarioService.editar(Object.assign(this.usuario, {status : 1}))
        .then(response => this.router.navigate([ '/usuario' ]))

    }


}
