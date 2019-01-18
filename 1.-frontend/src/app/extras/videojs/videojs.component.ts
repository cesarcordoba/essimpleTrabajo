import {
	Component,
	OnInit,
	OnDestroy,
	ElementRef,
	Input,
	AfterViewInit,
	ViewEncapsulation,
	OnChanges,
	SimpleChanges,
	ViewChild,
	EventEmitter,
	Output
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
	selector: 'videojs',
	templateUrl: './videojs.component.pug',
	styleUrls: ['./videojs.component.styl'],
	// encapsulation: ViewEncapsulation.None
})

export class VideoJSComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

	// reference to the element itself, we use this to access events and methods
	private _elementRef: ElementRef
	private player: any;

	@Input() id: number = 1;

	//video play
	@Input() autoplay = false;
	// video asset url
	@Input() url: any;
	@Input() urls: string[];

	@Input() mute = false;

	@Input() parar: boolean = false;

	@Input() controls = true;

	@Input() loop = false;

	@Input() esBackgraound = false;

	@Input() button = false;

	@Output() idVideo = new EventEmitter<number>();

	@Output() finVideo = new EventEmitter<boolean>();

	@Output() inicioVideo = new EventEmitter<boolean>();

	// constructor initializes our declared vars
	constructor(elementRef: ElementRef, private domSanitizer: DomSanitizer) {
		this.url = false;
	}


	afterChange(e) {
	}

	ngOnInit() {
	}

	ngOnDestroy() {
		this.player.dispose();
	}

	// use ngAfterViewInit to make sure we initialize the videojs element
	// after the component template itself has been rendered
	ngAfterViewInit() {
		this.contruirPlayer();

	}
	ngOnChanges(changes: SimpleChanges) {

	}
	contruirPlayer() {
		var options = {
			"techOrder": ["youtube"],
			"sources": [{ "type": "video/youtube", "src": this.url, "youtube": { "ytControls": false, "customVars": { "wmode": "transparent" } } }]
		};
		this.player = videojs('vid' + this.id, options, function () {
			var myPlayer = this, id = myPlayer.id();

		});

		// var contenido = document.getElementById('reparto')
		// // this.player.overlay({
		// // 	overlays: [{
		// // 		start: 'pause',
		// // 		content: contenido,
		// // 		end: 'playing',
		// // 		attachToControlBar: true
		// // 	}]
		// // });

		this.player.autoplay(this.autoplay);
		this.player.muted(this.mute);
		this.player.controls(this.controls);
		this.player.loop(this.loop);

		// Initialize resizeVideoJS()
		this.resizeVideoJS();
		// Then on resize call resizeVideoJS()
		window.onresize = this.resizeVideoJS;

		this.player.on('ended', () => {
			this.finVideo.emit(true);
		  });

	}

	selectVideo(){
		this.idVideo.emit(this.id)
	}

	resizeVideoJS(){
		var aspectRatio = 9/16;
		var width = document.getElementById('vid' + this.id).parentElement.offsetWidth;
		this.player.width(width)
		this.player.height( width * aspectRatio );
	  }

	overlay(contenido) {
		this.player.overlay({
			overlays: [{
				start: 'pause',
				content: contenido,
				end: 'playing',
				attachToControlBar: true
			}]
		});
	}

	pausar() {
		this.player.pause()
	}

	reproducir() {
		this.player.play()
	}

	fullscreen() {
		this.player.fulScreen()
	}

	destroyPlayer() {
		this.player.dispose();
	}
}
