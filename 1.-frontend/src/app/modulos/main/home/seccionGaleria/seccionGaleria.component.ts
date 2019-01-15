
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../../../servicios';

@Component({
  selector: 'seccionGaleria',
  templateUrl: './seccionGaleria.component.pug',
  styleUrls: ['./seccionGaleria.component.styl']
})
export class SecciongaleriaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    proyectos = {
      items : []
    }
    filtro : any;
    constructor() {

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
}