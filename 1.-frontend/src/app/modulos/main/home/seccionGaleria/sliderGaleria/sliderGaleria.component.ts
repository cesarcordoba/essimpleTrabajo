
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sliderGaleria',
    templateUrl: './sliderGaleria.component.pug',
    styleUrls: ['./sliderGaleria.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class SlidergaleriaComponent implements OnInit {

    slideConfigGaleria : any
    control : any
    currentSlide : any;

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyectos
    constructor(private _router: Router) {
        this.slideConfigGaleria = { "slidesToShow": 3, "slidesToScroll": 1 , "arrows" : false, 'dots' : false, 'autoplay': true, 'autoplaySpeed': 2000}
        this.currentSlide = 0

  }

  mandarAProyecto(id){
    this._router.navigate(['/proyecto/' + id]);
  }

  ngOnInit() {

  }

  afterChange = (event) => this.currentSlide = event.currentSlide
}