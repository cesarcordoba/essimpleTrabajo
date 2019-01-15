
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProyectoService } from '../../../../../servicios';
import { Router } from '@angular/router';
@Component({
    selector: 'sliderProyectosRelacionadosInver',
    templateUrl: './sliderProyectosRelacionadosInver.component.pug',
    styleUrls: ['./sliderProyectosRelacionadosInver.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class SliderproyectosrelacionadosinverComponent implements OnInit {

    slideConfig : any
    control : any
    currentSlide : any;

    proyectos = {
        items : []
    }
    filtro : any;

    constructor(private _router: Router) {
        this.slideConfig = { "slidesToShow": 2, "slidesToScroll": 2 , "arrows" : true, 'dots' : true }
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

  }

  mandarAProyecto(id){
    this._router.navigate(['/proyecto/' + id]);
  }

  ngOnInit() {

  }

  afterChange = (event) => this.currentSlide = event.currentSlide
}