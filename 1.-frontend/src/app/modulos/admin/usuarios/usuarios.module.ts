// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { RangeSliderModule } from 'ngx-range-slider'

import { UsuariosComponent } from './usuarios.component';
import { ListausuariosComponent } from './listaUsuarios/listaUsuarios.component';
import { BuscadorusuariosComponent } from './buscadorusuarios/buscadorusuarios.component';





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
        UsuariosComponent,
        ListausuariosComponent,
        BuscadorusuariosComponent
    ],
    exports: []
})
export class UsuariosModule {}

