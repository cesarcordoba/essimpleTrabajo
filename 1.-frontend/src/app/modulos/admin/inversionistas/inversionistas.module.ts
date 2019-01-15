
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { RangeSliderModule } from 'ngx-range-slider'

import { InversionistasComponent } from './inversionistas.component';


import { BuscadorinversionistasComponent } from './buscadorInversionistas/buscadorInversionistas.component';
import { ListainversionistasComponent } from './listaInversionistas/listaInversionistas.component';


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
        InversionistasComponent,
        BuscadorinversionistasComponent,
        ListainversionistasComponent,
    ],
    exports: []
})
export class InversionistasModule {}

