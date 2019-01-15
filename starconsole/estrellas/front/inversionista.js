var fs = require('fs');
const _ = require('lodash');


module.exports = (data, documento) => {
return new Promise(resolve => {

documento.write(`

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


`)

data.forEach(n =>
documento.write(`
import { `+   _.capitalize(n.nombre)   +`Module } from './`+   n.nombre   +`/`+   n.nombre   +`.module';
`)
)

documento.write(`
@NgModule({
	imports: [
		CommonModule,
		FormsModule, ReactiveFormsModule,
		InversionistaRoutingModule,
		SlickCarouselModule,
		FroalaEditorModule, FroalaViewModule,
		ExtrasModule,
		MaterialModule,`)

data.forEach(n =>
documento.write(`
        `+_.capitalize(n.nombre)+`Module,`))

documento.write(`
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
`, (algo) => resolve(true))
    })
}
