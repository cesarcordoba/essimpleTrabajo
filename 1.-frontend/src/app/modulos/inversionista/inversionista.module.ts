

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MaterialModule } from './../../extras/material.module';
import { ExtrasModule } from './../../extras/extras.module';


import { InversionistaComponent } from './inversionista.component';
import { InversionistaRoutingModule } from './inversionista-routing.module';
import { ConfirmDelDialogComponent } from './fragments/confirm-del-dialog/confirm-del-dialog.component';



import { HomeModule } from './home/home.module';

import { InfoinversionistaModule } from './infoInversionista/infoInversionista.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, ReactiveFormsModule,
		InversionistaRoutingModule,
		SlickCarouselModule,
		FroalaEditorModule, FroalaViewModule,
		ExtrasModule,
		MaterialModule,
        HomeModule,
        InfoinversionistaModule,
		],
	entryComponents: [
		ConfirmDelDialogComponent,

	],
	declarations: [
		InversionistaComponent,
		ConfirmDelDialogComponent,

	]
})
export class InversionistaModule { }
