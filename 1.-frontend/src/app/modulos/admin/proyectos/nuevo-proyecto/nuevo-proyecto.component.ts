import { Proyecto } from './../../../../modelos/Proyecto.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//-import { Proyecto } from '../../modelos/Proyecto.model';
;

@Component({
    selector: 'app-nuevo-proyecto',
    templateUrl: './nuevo-proyecto.component.pug',
    styleUrls: ['./nuevo-proyecto.component.styl']
})

export class NuevoProyectoComponent implements OnInit {
    form: FormGroup;
    data : Proyecto;
    constructor(
        public dialogRef: MatDialogRef<NuevoProyectoComponent>,
        private formBuilder: FormBuilder,
    ) {
    this.data = new Proyecto({})
}
        submit(){
            if(this.form.valid){
                this.dialogRef.close(this.data)
                console.log(this.data)
            }

        }

        cancel(){
            this.dialogRef.close()
        }

        ngOnInit(){
            this.form = this.formBuilder.group({
                nombre:['', Validators.required]
            })

        }
}
