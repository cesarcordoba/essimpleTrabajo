
// Angular Imports
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../extras/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { FichanosotrosproyectoComponent } from './fichaNosotrosProyecto.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,],
    declarations: [
        FichanosotrosproyectoComponent,
    ],
    exports: [FichanosotrosproyectoComponent]
})
export class FichanosotrosproyectoModule {}
