
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasModule } from '../../../extras/extras.module'
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { Ng2ImgMaxModule } from 'ng2-img-max'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { HomeComponent } from './home.component';


import { InformacioncontratistaComponent } from './informacionContratista/informacionContratista.component';
import { FotoperfilComponent } from './informacionContratista/fotoPerfil/fotoPerfil.component';
import { ProyectoscontratistaComponent } from './informacionContratista/proyectosContratista/proyectosContratista.component';
import { GridproyectoscontratistaComponent } from './informacionContratista/proyectosContratista/gridproyectosContratista/gridproyectosContratista.component';
import { MetricascontratistasComponent } from './metricasContratistas/metricasContratistas.component';
import { ProyectosrelacionadoscontratistaComponent } from './proyectosRelacionadosContratista/proyectosRelacionadosContratista.component';
import { SliderproyectosrelacionadoscontraComponent } from './proyectosRelacionadosContratista/sliderProyectosRelacionadosContra/sliderProyectosRelacionadosContra.component';
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
        InformacioncontratistaComponent,
        FotoperfilComponent,
        ProyectoscontratistaComponent,
        GridproyectoscontratistaComponent,
        MetricascontratistasComponent,
        ProyectosrelacionadoscontratistaComponent,
        SliderproyectosrelacionadoscontraComponent,
    ],
    exports: []
})
export class HomeModule {}

