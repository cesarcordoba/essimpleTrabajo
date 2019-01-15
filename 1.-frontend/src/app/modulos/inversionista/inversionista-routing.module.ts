import { InfoinversionistaComponent } from './infoInversionista/infoInversionista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Importamos los componentes que se usarán en las rutas
 */
import { InversionistaComponent } from './inversionista.component';
import { HomeComponent } from './home/home.component';

// import { UsuarioComponent } from './usuario/usuario.component';


const inversionista_routers: Routes = [
  {
    path: '',
    component: InversionistaComponent,
    children: [
			{
				path: 'proyectos',
				component: HomeComponent
			},
			{
				path: '',
				component: InfoinversionistaComponent
			}

    ]
  }
];

@NgModule({
	imports: [
		RouterModule.forChild(inversionista_routers),
		CommonModule,
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class InversionistaRoutingModule { }
