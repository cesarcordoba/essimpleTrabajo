import { APILOCAL } from './../../../../environments/environment';
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../servicios/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    url = APILOCAL.url
    loginForm: FormGroup;
    registroForm: FormGroup;
    inicioIncorecto = false;
	constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
	}


	login(form: FormGroup) {

		if(form.controls.usuario.valid && form.controls.password.valid){
			let usuario = { correo: form.controls.usuario.value, password: form.controls.password.value }
			this.auth.iniciarSesion(usuario)
			.then(response => response ? this.luego() : null)
			// .then(response => response? null: this.router.navigate(['/admin']))
		}
    }

	ngOnInit() {


		this.loginForm = this.formBuilder.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required]
		});

        this.registroForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            correo: ['', Validators.required],
            password: ['', Validators.required],
            repeatpassword: ['', Validators.required],
            tipo: ['', Validators.required]
		});



		// this.auth.obtenerUsuario().subscribe(user => user && user.getId() ? this.router.navigate(['/admin']) : null)

    }
    cerrar(){
        this.dialogRef.close()
    }

    registrar(form: FormGroup, ){

        if(form.controls.tipo.value === true){
            if (form.controls.correo.valid &&
                form.controls.nombre.valid &&
                form.controls.apellido.valid &&
                form.controls.password.valid &&
                form.controls.repeatpassword.valid &&
                (form.controls.password.value == form.controls.repeatpassword.value)) {
    
                let usuario = {
                    nombre: form.controls.nombre.value,
                    apellido: form.controls.apellido.value,
                    correo: form.controls.correo.value,
                    status: 2,
                    tipo: "contratista",

                    Llave : {
                            'password' : form.controls.password.value
                        }
                    }
    
                this.auth.registrar(usuario)
                .then(response => {
                    this.router.navigate(['registro'])
                    this.dialogRef.close()
                })
            }
        }else{
            if (form.controls.correo.valid &&
                form.controls.nombre.valid &&
                form.controls.apellido.valid &&
                form.controls.password.valid &&
                form.controls.repeatpassword.valid &&
                (form.controls.password.value == form.controls.repeatpassword.value)) {
    
                let usuario = {
                    nombre: form.controls.nombre.value,
                    apellido: form.controls.apellido.value,
                    correo: form.controls.correo.value,
                    status: 1,
                    tipo: "inversionista",
                    Llave : {
                            'password' : form.controls.password.value
                        }
                    }
    
                this.auth.registrar(usuario)
                .then(response => {
                    this.router.navigate(['inversionista'])
                    this.dialogRef.close()
                })
            }
        }
    }

    luego(){
        console.log("estoy aqui")
        this.auth.obtenerUsuario()
        .subscribe(usuario => {

            console.log(usuario)

            if(usuario.status === 0){
                this.router.navigate(['registro'])
            }else{
                console.log(usuario.tipo)
                this.router.navigate(['/' +  usuario.tipo])
            }
            this.dialogRef.close()

        })



    }
}
