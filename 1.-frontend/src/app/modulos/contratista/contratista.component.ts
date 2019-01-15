import { AuthService } from './../../servicios/auth.service';
import { Usuario } from './../../modelos/Usuario.model';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
	selector: 'app-contratista',
	templateUrl: './contratista.component.pug',
	styleUrls: ['./contratista.component.styl'],
	providers: [MediaMatcher]
})
export class ContratistaComponent implements OnInit, OnDestroy {
	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	navLinks = [];
	usuario: Usuario;
	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,  private us: AuthService) {
		this.mobileQuery = media.matchMedia('(max-width: 900px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);

		this.navLinks = [
			{ path: '/contratista', label: 'Perfil', icon: 'person' },
			{ path: '/contratista/proyectos', label: 'Mis proyectos', icon: 'business' }
		];
	}

	salir() {
		this.us.salir()
	}

	ngOnInit() {
		console.log('contratista component works')
		this.us.obtenerUsuario().subscribe(user => {
			this.usuario = user
		})
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}


}
