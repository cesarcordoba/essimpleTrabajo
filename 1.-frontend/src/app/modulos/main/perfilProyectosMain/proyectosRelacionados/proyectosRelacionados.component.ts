
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'proyectosRelacionados',
  templateUrl: './proyectosRelacionados.component.pug',
  styleUrls: ['./proyectosRelacionados.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class ProyectosrelacionadosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor(private router: Router) {

  }

  mandarAProyectos(){
    this.router.navigate(['/proyectos' ])
  }

  

  ngOnInit() {



  }
}