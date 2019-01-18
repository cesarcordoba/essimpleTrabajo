import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import * as _ from 'lodash'


@Injectable()
export class AuthGuard implements CanActivate

	//  implements CanActivate, CanActivateChild

	{
	constructor(private router: Router, private auth: AuthService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


		// setTimeout(() => {

			let hayUsuario: boolean;
			this.auth.obtenerUsuario()
			.asObservable()
			.subscribe(user => {
				console.log(user)
				hayUsuario = user && user.id ? true : true ;
			}).closed

			if (!hayUsuario) {

				// this.router.navigate(['/'])

				return hayUsuario;
			}

			return hayUsuario

		// }, 2000)
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

		let ruta = _.split(state.url, '/')[1]
		console.log(ruta)
		let tienePermisos: boolean;

		this.auth.obtenerUsuario().subscribe(user => {
			console.log(user)
			tienePermisos = user.tipo === ruta ?  true :  false
		})
		.closed
		console.log(tienePermisos)
		return tienePermisos;
	}

}
