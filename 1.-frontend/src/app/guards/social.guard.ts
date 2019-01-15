import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable()
export class SocialGuard implements CanActivate{
	constructor(private router: Router, private auth: AuthService, private active: ActivatedRoute) {

		console.log(this.active)

		this.active.params.subscribe(params => {
			console.log(params)
			params.token ? this.auth.loginFacebook(params.token).then(res => {
				console.log(res)
				res ?
					this.router.navigate(['/']) : this.router.navigate(['/'])
			}) : null;
		});

	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	) {

		console.log(this.router.url)

		this.active.params.subscribe(params => {
			console.log(params)
			params.token ? this.auth.loginFacebook(params.token).then(res => {
				console.log(res)
				res ?
					this.router.navigate(['/']) : this.router.navigate(['/'])
			}) : null;
		});


		return true
		// let hayUsuario: boolean;
		// this.auth.obtenerUsuario().asObservable().subscribe(user => {
		// 	user && user.getId() ? hayUsuario = true : (hayUsuario = false);
		// }).closed
		//
		// if (!hayUsuario) {
		// 	this.router.navigate(['/login'])
		// 	return hayUsuario;
		// }
		//
		// return hayUsuario
	}
}
