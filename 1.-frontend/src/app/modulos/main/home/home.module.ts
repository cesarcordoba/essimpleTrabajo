
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { RangeSliderModule } from 'ngx-range-slider'

import { HomeComponent } from './home.component';


import { SliderComponent } from './slider/slider.component';
import { SecciontotalesComponent } from './seccionTotales/seccionTotales.component';
import { SeccionproyectosComponent } from './seccionProyectos/seccionProyectos.component';
import { GridproyectosComponent } from './seccionProyectos/gridProyectos/gridProyectos.component';
import { SecciongraficasComponent } from './seccionGraficas/seccionGraficas.component';
import { SlidercasosexitosComponent } from './sliderCasosExitos/sliderCasosExitos.component';
import { SecciongaleriaComponent } from './seccionGaleria/seccionGaleria.component';
import { SlidergaleriaComponent } from './seccionGaleria/sliderGaleria/sliderGaleria.component';
import { SeccionregistroComponent } from './seccionRegistro/seccionRegistro.component';
import { FichaproyectomainModule } from './../compartidos/fichaProyectoMain/fichaProyectoMain.module';

@NgModule({
    imports: [
        SlickModule.forRoot(),
        CommonModule,
        MaterialModule,
        RangeSliderModule,
        FormsModule,
        ReactiveFormsModule,
        FichaproyectomainModule
],
    declarations: [
        HomeComponent,
        SliderComponent,
        SecciontotalesComponent,
        SeccionproyectosComponent,
        GridproyectosComponent,
        SecciongraficasComponent,
        SlidercasosexitosComponent,
        SecciongaleriaComponent,
        SlidergaleriaComponent,
        SeccionregistroComponent,
    ],
    exports: []
})
export class HomeModule {}

