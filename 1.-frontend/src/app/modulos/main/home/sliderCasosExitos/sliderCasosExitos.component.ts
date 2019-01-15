
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProyectoService } from '../../../../servicios';
@Component({
    selector: 'sliderCasosExitos',
    templateUrl: './sliderCasosExitos.component.pug',
    styleUrls: ['./sliderCasosExitos.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class SlidercasosexitosComponent implements OnInit {

    slideConfig : any
    control : any
    currentSlide : any;

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    proyectos = {
        items : []
    }
    filtro : any;

    constructor() {
        this.slideConfig = { "slidesToShow": 2, "slidesToScroll": 1, "arrows" : true, 'dots' : false}
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