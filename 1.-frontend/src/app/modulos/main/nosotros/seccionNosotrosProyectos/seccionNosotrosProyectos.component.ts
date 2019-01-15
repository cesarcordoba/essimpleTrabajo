import { ProyectoService } from './../../../../servicios/Proyecto.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seccionNosotrosProyectos',
  templateUrl: './seccionNosotrosProyectos.component.pug',
  styleUrls: ['./seccionNosotrosProyectos.component.styl']
})
export class SeccionnosotrosproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    proyectos = [];
    items: any;
    constructor() {

  }

  ngOnInit() {

    ProyectoService.obtener()
    .then(response => this.items = response)
    .then(cambiar => this.obtenerRandoms(2, this.items))

    
  }

  private obtenerRandoms(numero, array){
    while(this.proyectos.length < numero){
      let proyectito = this.calcularRandom(array)
      if(this.proyectos.indexOf(proyectito) == -1) this.proyectos.push(proyectito);
    }
  }

  private calcularRandom(array){
    return array[Math.floor(Math.random()*array.length)]
  }
}