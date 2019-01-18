import { Component, OnInit, Input, ViewEncapsulation, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'gridProyectos',
  templateUrl: './gridProyectos.component.pug',
  styleUrls: ['./gridProyectos.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class GridproyectosComponent implements OnInit, OnDestroy{

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() proyectos;

    columnas:any
    height = '450px'
    colspan = 1
    rowspan = 1
    mobileQuery_mediana: MediaQueryList;
    mobileQuery_tablet: MediaQueryList;
    mobileQuery_mobile: MediaQueryList;
    mobileQuery_grande: MediaQueryList;
    private _mobileQueryListener_grande: () => void;
    private _mobileQueryListener_mediana: () => void;
    private _mobileQueryListener_tablet: () => void;
    private _mobileQueryListener_mobile: () => void;
    

    constructor(private _router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery_grande = media.matchMedia('(min-width: 1300px) and (max-width : 2900px)');
    this._mobileQueryListener_grande = () => {changeDetectorRef.detectChanges(); this.columnas = 4 };
    this.mobileQuery_grande.addListener(this._mobileQueryListener_grande);

    this.mobileQuery_mediana = media.matchMedia('(min-width: 1000px) and (max-width : 1299px)');
    this._mobileQueryListener_mediana = () => {changeDetectorRef.detectChanges(); this.columnas = 3 };
    this.mobileQuery_mediana.addListener(this._mobileQueryListener_mediana);

    this.mobileQuery_tablet = media.matchMedia('(min-width: 768px) and (max-width : 999px)');
    this._mobileQueryListener_tablet = () => {changeDetectorRef.detectChanges(); this.columnas = 2 };
    this.mobileQuery_tablet.addListener(this._mobileQueryListener_tablet);

    this.mobileQuery_mobile = media.matchMedia('(max-width: 767px)');
    this._mobileQueryListener_mobile = () => {changeDetectorRef.detectChanges(); this.columnas = 1 };
    this.mobileQuery_mobile.addListener(this._mobileQueryListener_mobile);


  }

  mandarAProyecto(id){
    this._router.navigate(['/proyecto/' + id]);
  }

  ngOnDestroy() {
    this.mobileQuery_grande.removeListener(this._mobileQueryListener_grande);
    this.mobileQuery_mediana.removeListener(this._mobileQueryListener_mediana);
    this.mobileQuery_tablet.removeListener(this._mobileQueryListener_tablet);
    this.mobileQuery_mobile.removeListener(this._mobileQueryListener_mobile);
	}

  ngOnInit() {
    if($(window).width() > 1300){
      this.columnas = 4
    }else if(($(window).width() > 1000) && ($(window).width() < 1299)){
      this.columnas = 3
    }else if(($(window).width() > 768) && ($(window).width() < 99)){
      this.columnas = 2
    }else if($(window).widt() < 768){
      this.columnas = 1
    }
  }
}