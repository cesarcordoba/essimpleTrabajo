
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasModule } from '../../../extras/extras.module'
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { Ng2ImgMaxModule } from 'ng2-img-max'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { PerfilcontratistaComponent } from './perfilContratista.component';


import { FormulariocontratistasComponent } from './formularioContratistas/formularioContratistas.component';
import { ListaproyectoscontratistasComponent } from './listaProyectosContratistas/listaProyectosContratistas.component';
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
        PerfilcontratistaComponent,
        FormulariocontratistasComponent,
        FormulariorestanteComponent,
        ListaproyectoscontratistasComponent,
    ],
    exports: []
})
export class PerfilcontratistaModule {}

