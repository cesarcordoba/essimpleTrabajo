
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasModule } from '../../../extras/extras.module'
import { MaterialModule } from '../../../extras/material.module';
import { SlickModule } from 'ngx-slick';
import { Ng2ImgMaxModule } from 'ng2-img-max'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { PerfilproyectosComponent } from './perfilproyectos.component';


import { InformacionproyectoComponent } from './informacionproyecto/informacionproyecto.component';
import { FormularioproyectosComponent } from './informacionproyecto/formularioproyectos/formularioproyectos.component';
import { ImagenesproyectosComponent } from './imagenesproyectos/imagenesproyectos.component';
import { GridimgproyectosComponent } from './imagenesproyectos/gridimgproyectos/gridimgproyectos.component';
import { DropifyproyectoComponent } from './imagenesproyectos/gridimgproyectos/dropifyproyecto/dropifyproyecto.component';
import { UsauriosproyectoComponent } from './usauriosproyecto/usauriosproyecto.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@NgModule({
    imports: [
        SlickModule.forRoot(),
        CommonModule,
        ExtrasModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2ImgMaxModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
],
    declarations: [
        PerfilproyectosComponent,
        InformacionproyectoComponent,
        FormularioproyectosComponent,
        ImagenesproyectosComponent,
        GridimgproyectosComponent,
        DropifyproyectoComponent,
        UsauriosproyectoComponent,
    ],
    exports: []
})
export class PerfilproyectosModule {}

