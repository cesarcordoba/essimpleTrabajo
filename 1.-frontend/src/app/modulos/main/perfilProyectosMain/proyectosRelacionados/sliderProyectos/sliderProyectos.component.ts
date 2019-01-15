
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProyectoService } from '../../../../../servicios';
import { Router } from '@angular/router';
@Component({
    selector: 'sliderProyectos',
    templateUrl: './sliderProyectos.component.pug',
    styleUrls: ['./sliderProyectos.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class SliderproyectosComponent implements OnInit {

    slideConfig : any
    control : any
    currentSlide : any;

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    proyectos = {
        items : []
    }
    filtro : any;

    constructor(private _router: Router) {
        this.slideConfig = { "slidesToShow": 3, "slidesToScroll": 1 , "arrows" : true, 'dots' : false }
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

  mandarAProyecto(id){
    this._router.navigate(['/proyecto/' + id]);
  }

  ngOnInit() {

  }

  afterChange = (event) => this.currentSlide = event.currentSlide
}