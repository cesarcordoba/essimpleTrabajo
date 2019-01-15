import { PerfilproyectosComponent } from './perfilproyectos/perfilproyectos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InfocontratistaComponent } from './infoContratista/infoContratista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Importamos los componentes que se usarán en las rutas
 */
import { ContratistaComponent } from './contratista.component';
import { HomeComponent } from './home/home.component';

// import { UsuarioComponent } from './usuario/usuario.component';


const contratista_routers: Routes = [
  {
    path: '',
    component: ContratistaComponent,
    children: [
			{
				path: 'proyectos',
				component: ProyectosComponent
			},
			{
				path: 'proyectos/:id',
				component: PerfilproyectosComponent
			},
			{
				path: '',
				component: InfocontratistaComponent
			}
    ]
  }
];

@NgModule({
	imports: [
		RouterModule.forChild(contratista_routers),
		CommonModule,
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class ContratistaRoutingModule { }
