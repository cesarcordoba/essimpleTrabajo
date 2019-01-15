
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { RangeSliderModule } from 'ngx-range-slider'

import { ContactoComponent } from './contacto.component';


import { ContactohomeComponent } from './contactoHome/contactoHome.component';
import { ContactoformularioComponent } from './contactoHome/contactoFormulario/contactoFormulario.component';


@NgModule({
    imports: [
        SlickModule.forRoot(),
        CommonModule,
        MaterialModule,
        RangeSliderModule,
        FormsModule,
        ReactiveFormsModule,
],
    declarations: [
        ContactoComponent,
        ContactohomeComponent,
        ContactoformularioComponent,
    ],
    exports: []
})
export class ContactoModule {}

