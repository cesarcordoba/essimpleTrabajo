import { AuthService } from './../../servicios/auth.service';
import { Usuario } from './../../modelos/Usuario.model';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.pug',
	styleUrls: ['./admin.component.styl'],
	providers: [MediaMatcher]
})
export class AdminComponent implements OnInit, OnDestroy {
	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	navLinks = [];
	usuario: Usuario;
	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,  private us: AuthService) {
		this.mobileQuery = media.matchMedia('(max-width: 900px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);

		this.navLinks = [
			{ path: '/admin', label: 'Inicio', icon: 'home' },
			{ path: '/admin/proyectos', label: 'Proyectos', icon: 'work' },
			{ path: '/admin/usuarios', label: 'Usuarios', icon: 'assignment_ind' },
			{ path: '/admin/inversionistas', label: 'Inversionistas', icon: 'group' },
			{ path: '/admin/contratistas', label: 'Contratistas', icon: 'business' },
		];
	}

	salir() {
		this.us.salir()
	}

	ngOnInit() {
		console.log('admin component works')
		this.us.obtenerUsuario().subscribe(user => {
			this.usuario = user

			//user && user.getTipo() == 'admin'? this.navLinks.push({ path: '/admin/usuarios', label: 'Usuarios', icon: 'supervised_user_circle' }) : null;
		})
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}


}
