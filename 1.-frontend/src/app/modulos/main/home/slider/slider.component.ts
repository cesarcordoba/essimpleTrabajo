
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProyectoService } from '../../../../servicios';
@Component({
    selector: 'slider',
    templateUrl: './slider.component.pug',
    styleUrls: ['./slider.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

    slideConfig : any
    control : any
    currentSlide : any;

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    proyectos = {
        items : []
    }
    filtro : any;

    constructor() {
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 , "arrows" : false, 'dots' : true, 'autoplay': true, 'autoplaySpeed': 2000}
        this.currentSlide = 0
        this.filtro = {
                pagina : 1,
                limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  20 :  3,
                order : ['id'],
                where : {},
                include : []
            }

    ProyectoService.paginacion(this.filtro)
    .then(response => this.proyectos = response)
    .then(response => console.log(response))

  }

  ngOnInit() {

  }

  afterChange = (event) => this.currentSlide = event.currentSlide
}