
import { Component, OnInit, Input } from '@angular/core';


//    2

@Component({
  selector: 'imagenesproyectos',
  templateUrl: './imagenesproyectos.component.pug',
  styleUrls: ['./imagenesproyectos.component.styl']
})
export class ImagenesproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() proyectos

    constructor() {

   

  }

  ngOnInit() {


  }
}