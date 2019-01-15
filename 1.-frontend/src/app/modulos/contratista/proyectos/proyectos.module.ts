
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { RangeSliderModule } from 'ngx-range-slider'

import { ProyectosComponent } from './proyectos.component';


import { ListaproyectosComponent } from './listaProyectos/listaProyectos.component';
import { BuscadorproyectosComponent } from './buscadorproyectos/buscadorproyectos.component';


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
        ProyectosComponent,
        ListaproyectosComponent,
        BuscadorproyectosComponent,
    ],
    exports: []
})
export class ProyectosModule {}

