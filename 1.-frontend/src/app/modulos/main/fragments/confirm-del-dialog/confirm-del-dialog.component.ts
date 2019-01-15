import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from './../../../../servicios/auth.service';


@Component({
  selector: 'app-confirm-del-dialog',
  templateUrl: './confirm-del-dialog.component.pug',
  styleUrls: ['./confirm-del-dialog.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmDelDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDelDialogComponent>, private us: AuthService) { }
  usuario: boolean = false
  ngOnInit() {

		this.us.obtenerUsuario().subscribe(user => {
        if(user){
          this.usuario = true
        }else{
          this.usuario = false
        }
		})

  }

  submit() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
