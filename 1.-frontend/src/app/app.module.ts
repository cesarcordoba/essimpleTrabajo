import { APILOCAL } from './../environments/environment.prod';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AdminModule } from './modulos/admin/admin.module';
// import { MainModule } from './modulos/main/main.module';
import { AuthService } from './servicios/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SocialGuard } from './guards/social.guard';
// import { InversionistaModule } from './modulos/inversionista/inversionista.module';
// import { ContratistaModule } from './modulos/contratista/contratista.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		NgtUniversalModule,
		AppRoutingModule,
		// AdminModule,
		// InversionistaModule,
		// ContratistaModule,
		// MainModule,
		FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
		// ServiciosModule.forRoot(APILOCAL.url),
	],
	providers: [
		AuthService,
		AuthGuard,
		SocialGuard
	],
})
export class AppModule { }
