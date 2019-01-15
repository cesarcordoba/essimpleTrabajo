
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasModule } from '../../../extras/extras.module'
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { Ng2ImgMaxModule } from 'ng2-img-max'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { PerfilinversionistaComponent } from './perfilinversionista.component';


import { FormularioinversionistasComponent } from './formularioInversionistas/formularioInversionistas.component';
import { ListaproyectosinversionistasComponent } from './listaProyectosInversionistas/listaProyectosInversionistas.component';
import { FormulariorestanteComponent } from './formularioRestante/formularioRestante.component';


@NgModule({
    imports: [
        SlickModule.forRoot(),
        CommonModule,
        ExtrasModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2ImgMaxModule,
],
    declarations: [
        PerfilinversionistaComponent,
        FormularioinversionistasComponent,
        FormulariorestanteComponent,
        ListaproyectosinversionistasComponent,
    ],
    exports: []
})
export class PerfilinversionistaModule {}

