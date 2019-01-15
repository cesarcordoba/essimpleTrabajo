import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: './modulos/main/main.module#MainModule'
	},
	{
		path: 'admin',
		loadChildren: './modulos/admin/admin.module#AdminModule'
	},
	{
		path: 'inversionista',
		loadChildren: './modulos/inversionista/inversionista.module#InversionistaModule'
	},
	{
		path: 'contratista',
		loadChildren: './modulos/contratista/contratista.module#ContratistaModule'
	},
    // { path: '',   redirectTo: '/', pathMatch: 'full' },
    // {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
