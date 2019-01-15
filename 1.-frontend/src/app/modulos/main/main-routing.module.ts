import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Importamos los componentes que se usarán en las rutas
 */
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PerfilproyectosmainComponent } from './perfilProyectosMain/perfilProyectosMain.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TerminosComponent } from './terminos/terminos.component';
import { SocialComponent } from '../../guards/social/social.component';
import { SocialGuard } from '../../guards/social.guard';

// import { UsuarioComponent } from './usuario/usuario.component';


const main_routers: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'proyectos',
				component: ProyectosComponent
			},
			{
				path: 'proyecto/:id',
				component: PerfilproyectosmainComponent
			},
			{
				path: 'nosotros',
				component: NosotrosComponent
			},
			{
				path: 'preguntas',
				component: PreguntasComponent
			},
			{
				path: 'contacto',
				component: ContactoComponent
			},
			{
                path: 'registro',
                component: RegistroComponent
			},
			{
                path: 'privacidad',
                component: PrivacidadComponent
			},
			{
                path: 'terminos',
                component: TerminosComponent
            }
    ]
	},
	{
		path: 'login',
		component: LoginComponent
	},	
	{
		path : 'social/:token',
		// canActivate: [ SocialGuard ],
		component : SocialComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(main_routers),
		CommonModule,
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class MainRoutingModule { }
