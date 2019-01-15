

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';


import { MaterialModule } from '../../extras/material.module';
import { ExtrasModule } from '../../extras/extras.module';


import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { HomeModule } from './home/home.module';

import { BeneficiosModule } from './beneficios/beneficios.module';

import { NosotrosModule } from './nosotros/nosotros.module';

import { PreguntasModule } from './preguntas/preguntas.module';

import { ContactoModule } from './contacto/contacto.module';

import { ProyectosModule } from './proyectos/proyectos.module';

import { PerfilproyectosmainModule } from './perfilProyectosMain/perfilProyectosMain.module';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TerminosComponent } from './terminos/terminos.component';
import { SocialComponent } from '../../guards/social/social.component';
import { ConfirmDelDialogComponent } from './fragments/confirm-del-dialog/confirm-del-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		MainRoutingModule,
		SlickCarouselModule,
		MaterialModule,
		ExtrasModule,
		FormsModule,
		ReactiveFormsModule,
		
        HomeModule,
        BeneficiosModule,
        NosotrosModule,
        PreguntasModule,
        ContactoModule,
        ProyectosModule,
        PerfilproyectosmainModule,
	],
	declarations: [
		MainComponent,
		LoginComponent,
		RegistroComponent,
		PrivacidadComponent,
		TerminosComponent,
		//-SocialComponent,
		ConfirmDelDialogComponent
	],
	entryComponents : [
		LoginComponent,
		ConfirmDelDialogComponent
    ],
})
export class MainModule { }
