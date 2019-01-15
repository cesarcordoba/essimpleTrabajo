
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { RangeSliderModule } from 'ngx-range-slider'

import { NosotrosComponent } from './nosotros.component';


import { NosotroshomeComponent } from './nosotrosHome/nosotrosHome.component';
import { SlidernosotrosComponent } from './nosotrosHome/sliderNosotros/sliderNosotros.component';
import { SeccionnosotrosproyectosComponent } from './seccionNosotrosProyectos/seccionNosotrosProyectos.component';
import { FichanosotrosproyectoModule } from './../compartidos/fichaNosotrosProyecto/fichaNosotrosProyecto.module';


@NgModule({
    imports: [
        SlickModule.forRoot(),
        CommonModule,
        MaterialModule,
        RangeSliderModule,
        FormsModule,
        ReactiveFormsModule,

        FichanosotrosproyectoModule, ],
    declarations: [
        NosotrosComponent,
        NosotroshomeComponent,
        SlidernosotrosComponent,
        SeccionnosotrosproyectosComponent,
    ],
    exports: []
})
export class NosotrosModule {}

