
import { Component, OnInit, Input } from '@angular/core';

import { ProyectoService } from '../../../../servicios';
import { Router } from '@angular/router';
@Component({
  selector: 'listaProyectosContratistas',
  templateUrl: './listaProyectosContratistas.component.pug',
  styleUrls: ['./listaProyectosContratistas.component.styl']
})
export class ListaproyectoscontratistasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() proyectos;
    // proyectos = {
    //     items : []
    // }
    filtro : any;

    constructor(private _router: Router) {
        this.filtro = {
                pagina : 1,
                limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  10 :  3,
                order : ['id'],
                where : {},
                include : []
            }

    // ProyectoService.paginacion(this.filtro)
    // .then(response => this.proyectos = response)

  }

  mandarAProyecto(id){
    this._router.navigate(['/admin/proyectos/' + id]);
  }

  ngOnInit() {



  }
}