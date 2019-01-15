
import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { Usuario } from '../../modelos/Usuario.model';
import { AuthService } from '../../servicios/auth.service';
import { LoginComponent } from  './login/login.component'
import { MatDialog } from '@angular/material';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.pug',
	styleUrls: ['./main.component.styl'],
	encapsulation: ViewEncapsulation.None,
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [   // :enter is alias to 'void => *'
				style({ opacity: 0 }),
				animate(1000, style({ opacity: 1 }))
			]),
			transition(':leave', [   // :leave is alias to '* => void'
				animate(1000, style({ opacity: 0 }))
			])
		])
	]
})
export class MainComponent implements OnInit, OnDestroy {
	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	navLinks = [];
	usuario: Usuario;
	subscription: Subscription;

	constructor(private router: Router, private dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private titleService: Title, private us: AuthService) {
		this.mobileQuery = media.matchMedia('(max-width: 768px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);

		this.navLinks = [
			{ path: '/proyectos', label: 'Proyectos', icon: 'airplanemode_active' },
			{ path: '/nosotros', label: 'Nosotros', icon: 'airplanemode_active' },
			{ path: '/preguntas', label: 'Preguntas', icon: 'airplanemode_active' },
			{ path: '/contacto', label: 'Contacto', icon: 'airplanemode_active' },
		];
	}

	ngOnInit() {
		this.us.obtenerUsuario()
		.subscribe(user => {
			this.usuario = user
			console.log(this.usuario)
		})
	}

	ngOnDestroy() {
		this.mobileQuery.removeListener(this._mobileQueryListener);
		this.subscription = this.us.obtenerUsuario().subscribe(user => this.usuario = user);
	}

	salir(){
		this.us.salir();
	}

	ir(x){
        this.router.navigate([ x ])
	}

	redireccionar(){
		console.log(this.usuario)
		this.router.navigate(['/' +  this.usuario.tipo])
	}
	
	login(){
		this.dialog.open(LoginComponent, {
			position : { top : '100px' },
			width :  '600px',
			height : '700px',
			maxWidth : '600px',
			data :  {}
		}).afterClosed().subscribe(response => {

		});
	}

}
