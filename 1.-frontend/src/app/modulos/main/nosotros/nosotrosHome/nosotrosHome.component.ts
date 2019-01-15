
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nosotrosHome',
  templateUrl: './nosotrosHome.component.pug',
  styleUrls: ['./nosotrosHome.component.styl']
})
export class NosotroshomeComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}