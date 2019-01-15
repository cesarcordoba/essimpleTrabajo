
import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'filtrosProyectos',
  templateUrl: './filtrosProyectos.component.pug',
  styleUrls: ['./filtrosProyectos.component.styl']
})
export class FiltrosproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    @Output() mandarOuput = new EventEmitter<{}>();
    peticion = {
      rendimiento: null,
      plazo: null
    }
    constructor() {

  }

  enviarRendimiento(event: any) {
    if(event.value === 0){
      this.peticion.rendimiento = null
    }else{
      this.peticion.rendimiento = event.value
      this.mandarOuput.emit(this.peticion)
    }
    
  }

  enviarPlazo(event: any) {
    if(event.value === 0){
      this.peticion.plazo = null
    }else {
      this.peticion.plazo = event.value
      this.mandarOuput.emit(this.peticion)
    }
    
  }

  ngOnInit() {}
}