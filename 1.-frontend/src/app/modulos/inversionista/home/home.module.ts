
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasModule } from '../../../extras/extras.module'
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { Ng2ImgMaxModule } from 'ng2-img-max'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { HomeComponent } from './home.component';


import { InformacioninversionistaComponent } from './informacionInversionista/informacionInversionista.component';
import { FotoperfilComponent } from './informacionInversionista/fotoPerfil/fotoPerfil.component';
import { ProyectosinversionistaComponent } from './informacionInversionista/proyectosInversionista/proyectosInversionista.component';
import { GridproyectosinversionistaComponent } from './informacionInversionista/proyectosInversionista/gridproyectosInversionista/gridproyectosInversionista.component';
import { MetricasinversionistaComponent } from './metricasInversionista/metricasInversionista.component';
import { ProyectosrelacionadosinversionistaComponent } from './proyectosRelacionadosInversionista/proyectosRelacionadosInversionista.component';
import { SliderproyectosrelacionadosinverComponent } from './proyectosRelacionadosInversionista/sliderProyectosRelacionadosInver/sliderProyectosRelacionadosInver.component';
import { FichaproyectomainModule } from './../compartidos/fichaProyectoMain/fichaProyectoMain.module';


@NgModule({
    imports: [
        SlickModule.forRoot(),
        CommonModule,
        ExtrasModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2ImgMaxModule,

        FichaproyectomainModule, ],
    declarations: [
        HomeComponent,
        InformacioninversionistaComponent,
        FotoperfilComponent,
        ProyectosinversionistaComponent,
        GridproyectosinversionistaComponent,
        MetricasinversionistaComponent,
        ProyectosrelacionadosinversionistaComponent,
        SliderproyectosrelacionadosinverComponent,
    ],
    exports: []
})
export class HomeModule {}

