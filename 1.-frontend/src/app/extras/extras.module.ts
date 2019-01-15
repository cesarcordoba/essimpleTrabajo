import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { SafeImagePipe } from '../pipes/safe-image.pipe';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DropifyComponent } from './dropify/dropify.component';
import { VideoJSComponent } from './videojs/videojs.component';;
import { SlickModule } from 'ngx-slick';
import { ImagenComponent } from './imagen/imagen.component';
// import { PreviewImageComponent } from './preview-image/preview-image.component';
//import { MultimediaComponent } from './multimedia/multimedia.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		SlickModule,
	],
	declarations: [
		SafeHtmlPipe,
		SafeImagePipe,
		AutocompleteComponent,
		DropifyComponent,
		VideoJSComponent,
		ImagenComponent,
		// PreviewImageComponent,
		//MultimediaComponent

	],
	exports: [
		AutocompleteComponent,
		DropifyComponent,
		VideoJSComponent,
		SafeHtmlPipe,
		ImagenComponent,
		// PreviewImageComponent,
		//MultimediaComponent
	],
	providers: [
	],
	entryComponents: [
		// PreviewImageComponent
	]
})

export class ExtrasModule { }
