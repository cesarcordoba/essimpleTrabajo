
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'sliderGaleria',
    templateUrl: './sliderGaleria.component.pug',
    styleUrls: ['./sliderGaleria.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class SlidergaleriaComponent implements OnInit {

    slideConfig : any
    control : any
    currentSlide : any;

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyectos
    constructor() {
        this.slideConfig = { "slidesToShow": 3, "slidesToScroll": 1 , "arrows" : false, 'dots' : false }
        this.currentSlide = 0

  }

  ngOnInit() {

  }

  afterChange = (event) => this.currentSlide = event.currentSlide
}