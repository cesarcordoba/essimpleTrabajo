
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactoHome',
  templateUrl: './contactoHome.component.pug',
  styleUrls: ['./contactoHome.component.styl']
})
export class ContactohomeComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}