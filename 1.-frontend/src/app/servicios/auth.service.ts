import { Injectable,  Inject, PLATFORM_ID  } from '@angular/core'
import { isPlatformBrowser } from '@angular/common';
import { APILOCAL } from '../../environments/environment'
import * as axios from 'axios'
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../modelos/Usuario.model';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
    private apiUrl: string = APILOCAL.url;
    private usuarioSubject = new BehaviorSubject<Usuario>(null);
    private isLoginSubject = new BehaviorSubject<boolean>(null);

    private redirecionarA = new BehaviorSubject<string>('/');

    constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.getItem("token") != null ?
            (this.isLoginSubject.next(true),this.validarToken(localStorage.getItem("token")) )
            : this.isLoginSubject.next(false);
         }

    }

    iniciarSesion(usuario) {
        return axios.default.post(this.apiUrl + '/data/login', usuario)
            .then(response => this.validarToken(response.data.token, response.data.success))
    }

    registrar(usuario) {
        return axios.default.post(this.apiUrl + '/data/registro', usuario)
            .then(response => this.validarToken(response.data.token, response.data.success))
    }

    loginFacebook(token) {
        return this.validarToken(token);
    }

    salir() {

        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem("token")
         }
        
       
        this.usuarioSubject.next(null)
        // this.router.navigate(['/login'])
    }

    usuarioLogeado() {
        return this.isLoginSubject.asObservable();
    }

    obtenerUsuario() {
        return this.usuarioSubject;
    }

    obtenerRedirect() {
        return this.redirecionarA.asObservable();
    }

    modificarRedirect(redirect: string) {
        this.redirecionarA.next(redirect);
    }

    private validarToken(token, succes?) {
        return axios.default.get(this.apiUrl + '/data/token/' + token)
            .then(response => {
                if (response.data.user) {
                    this.crearUsuario(response.data.user, token)
                    return true;
                }
                this.destruirUsuario();
                return false
            })
    }

    private crearUsuario(usuarioResponse, tokenValido) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem("token", tokenValido);
        }
        this.usuarioSubject.next(new Usuario(usuarioResponse))

    }

    private destruirUsuario() {
        this.usuarioSubject.next(null);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem("token")
         }

    }


}
