
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { RangeSliderModule } from 'ngx-range-slider'

import { ProyectosComponent } from './proyectos.component';


import { GridproyectosmainComponent } from './gridProyectosMain/gridProyectosMain.component';
import { FiltrosproyectosComponent } from './filtrosProyectos/filtrosProyectos.component';
import { FichaproyectomainModule } from './../compartidos/fichaProyectoMain/fichaProyectoMain.module';


@NgModule({
    imports: [
        SlickModule.forRoot(),
        CommonModule,
        MaterialModule,
        RangeSliderModule,
        FormsModule,
        ReactiveFormsModule,

        FichaproyectomainModule, ],
    declarations: [
        ProyectosComponent,
        GridproyectosmainComponent,
        FiltrosproyectosComponent,
    ],
    exports: []
})
export class ProyectosModule {}

