
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fotoPerfil',
  templateUrl: './fotoPerfil.component.pug',
  styleUrls: ['./fotoPerfil.component.styl']
})
export class FotoperfilComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() fotoPerfil

    
    constructor() {

  }

  

  ngOnInit() {



  }
}