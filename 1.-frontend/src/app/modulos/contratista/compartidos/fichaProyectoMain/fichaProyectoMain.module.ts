
// Angular Imports
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../extras/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { FichaproyectomainComponent } from './fichaProyectoMain.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,],
    declarations: [
        FichaproyectomainComponent,
    ],
    exports: [FichaproyectomainComponent]
})
export class FichaproyectomainModule {}
