
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


//    2
import { ProyectoService } from '../../../../servicios';
@Component({
  selector: 'seccionProyectos',
  templateUrl: './seccionProyectos.component.pug',
  styleUrls: ['./seccionProyectos.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class SeccionproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    proyectos = {
      items : []
    }
    filtro : any;

    constructor() {

      this.filtro = {
        pagina : 1,
        limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
        order : ['id'],
        where : {},
        include : []
    }

    ProyectoService.paginacion(this.filtro)
    .then(response => this.proyectos = response)

  }

  filtrar(valor){

    switch(valor) { 
      case 0: { 
          this.filtro = {
            pagina : 1,
            limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
            order : ['id'],
            where : {},
            include : []
          }
         break; 
      } 
      case 1: { 
          this.filtro = {
            pagina : 1,
            limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
            order : ['id'],
            where : {status:'vigente'},
            include : []
          } 
         break; 
      } 
      case 2: { 
          this.filtro = {
            pagina : 1,
            limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
            order : ['id'],
            where : {status:'proximo'},
            include : []
          }
        break; 
      } 
      case 3: { 
          this.filtro = {
            pagina : 1,
            limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
            order : ['id'],
            where : {status:'terminado'},
            include : []
          }
        break; 
      }
   }

    console.log(this.filtro)

    ProyectoService.paginacion(this.filtro)
    .then(response => this.proyectos = response)

  }

  ngOnInit() {



  }
}