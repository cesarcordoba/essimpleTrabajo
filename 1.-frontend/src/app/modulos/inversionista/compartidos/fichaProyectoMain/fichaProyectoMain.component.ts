
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ProyectoService } from '../../../../servicios';
import { Router } from '@angular/router';
@Component({
  selector: 'fichaProyectoMain',
  templateUrl: './fichaProyectoMain.component.pug',
  styleUrls: ['./fichaProyectoMain.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class FichaproyectomainComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyecto

    color = 'warn';
    mode = 'determinate';
    value: any;

    constructor(private _router: Router) {
      
  }

  mandarAProyecto(id){
    this._router.navigate(['/proyecto/' + id]);
  }

  ngOnInit() {

      console.log( this.proyecto  )
      this.value = Math.round((this.proyecto.acumulado * 100) / this.proyecto.meta)
  }
}