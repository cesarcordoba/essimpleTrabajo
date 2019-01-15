import { UsuariosModule } from './usuarios/usuarios.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MaterialModule } from './../../extras/material.module';
import { ExtrasModule } from './../../extras/extras.module';


import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component'
import { AdminRoutingModule } from './admin-routing.module';
import { ConfirmDelDialogComponent } from './fragments/confirm-del-dialog/confirm-del-dialog.component';


import { HomeModule } from './home/home.module';

import { ProyectosModule } from './proyectos/proyectos.module';

import { PerfilproyectosModule } from './perfilproyectos/perfilproyectos.module';

import { InversionistasModule } from './inversionistas/inversionistas.module';

import { ContratistasModule } from './contratistas/contratistas.module';

import { PerfilinversionistaModule } from './perfilinversionista/perfilinversionista.module';

import { PerfilcontratistaModule } from './perfilContratista/perfilContratista.module';
import { NuevoProyectoComponent } from './proyectos/nuevo-proyecto/nuevo-proyecto.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, ReactiveFormsModule,
		AdminRoutingModule,
		SlickCarouselModule,
		FroalaEditorModule, FroalaViewModule,
		ExtrasModule,
		MaterialModule,
        HomeModule,
        ProyectosModule,
        PerfilproyectosModule,
        InversionistasModule,
        ContratistasModule,
        PerfilinversionistaModule,
		PerfilcontratistaModule,
		UsuariosModule
		],
	entryComponents: [
		ConfirmDelDialogComponent,
		NuevoProyectoComponent
	],
	declarations: [
		AdminComponent,
		ConfirmDelDialogComponent,
		NuevoProyectoComponent
	]
})
export class AdminModule { }
