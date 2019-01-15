
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasModule } from '../../../extras/extras.module'
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { Ng2ImgMaxModule } from 'ng2-img-max'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { PerfilproyectosmainComponent } from './perfilProyectosMain.component';


import { InformacionproyectoComponent } from './informacionProyecto/informacionProyecto.component';
import { ProyectosrelacionadosComponent } from './proyectosRelacionados/proyectosRelacionados.component';
import { SliderproyectosComponent } from './proyectosRelacionados/sliderProyectos/sliderProyectos.component';
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
        PerfilproyectosmainComponent,
        InformacionproyectoComponent,
        ProyectosrelacionadosComponent,
        SliderproyectosComponent,
    ],
    exports: []
})
export class PerfilproyectosmainModule {}

