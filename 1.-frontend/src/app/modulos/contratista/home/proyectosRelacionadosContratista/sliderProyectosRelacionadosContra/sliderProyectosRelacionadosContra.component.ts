
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProyectoService } from '../../../../../servicios';
@Component({
    selector: 'sliderProyectosRelacionadosContra',
    templateUrl: './sliderProyectosRelacionadosContra.component.pug',
    styleUrls: ['./sliderProyectosRelacionadosContra.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class SliderproyectosrelacionadoscontraComponent implements OnInit {

    slideConfig : any
    control : any
    currentSlide : any;

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    proyectos = {
        items : []
    }
    filtro : any;

    constructor() {
        this.slideConfig = { "slidesToShow": 5, "slidesToScroll": 4 , "arrows" : true, 'dots' : true }
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