
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { RangeSliderModule } from 'ngx-range-slider'

import { ContratistasComponent } from './contratistas.component';


import { BuscadorcontratistasComponent } from './buscadorContratistas/buscadorContratistas.component';
import { ListacontratistasComponent } from './listaContratistas/listaContratistas.component';


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
        ContratistasComponent,
        BuscadorcontratistasComponent,
        ListacontratistasComponent,
    ],
    exports: []
})
export class ContratistasModule {}

