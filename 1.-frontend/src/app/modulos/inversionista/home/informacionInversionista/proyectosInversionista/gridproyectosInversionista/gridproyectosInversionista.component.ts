
import { Component, OnInit, Input, ViewEncapsulation, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'gridproyectosInversionista',
  templateUrl: './gridproyectosInversionista.component.pug',
  styleUrls: ['./gridproyectosInversionista.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class GridproyectosinversionistaComponent implements OnInit, OnDestroy {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyectos
    color = 'primary';
    mode = 'determinate';
    value = 0;
    diameter = 150;

    color_fecha = 'warn';
    mode_fecha  = 'determinate';
    value_fecha  = 0;
    diameter_fecha  = 150;
    // proyectos = {
    //     items : []
    // }
    filtro : any;
    columnas = 2
    height = '300px'
    colspan = 1
    rowspan = 1
    habilitado: boolean = false
    valor : any
    metrica: any;
    mobileQuery_mediana: MediaQueryList;
    mobileQuery_tablet: MediaQueryList;
    mobileQuery_mobile: MediaQueryList;
    mobileQuery_grande: MediaQueryList;
    private _mobileQueryListener_grande: () => void;
    private _mobileQueryListener_mediana: () => void;
    private _mobileQueryListener_tablet: () => void;
    private _mobileQueryListener_mobile: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery_grande = media.matchMedia('(min-width: 1300px) and (max-width : 2900px)');
    this._mobileQueryListener_grande = () => {changeDetectorRef.detectChanges(); this.columnas = 2 };
    this.mobileQuery_grande.addListener(this._mobileQueryListener_grande);

    this.mobileQuery_mediana = media.matchMedia('(min-width: 1000px) and (max-width : 1299px)');
    this._mobileQueryListener_mediana = () => {changeDetectorRef.detectChanges(); this.columnas = 2 };
    this.mobileQuery_mediana.addListener(this._mobileQueryListener_mediana);

    this.mobileQuery_tablet = media.matchMedia('(min-width: 768px) and (max-width : 999px)');
    this._mobileQueryListener_tablet = () => {changeDetectorRef.detectChanges(); this.columnas = 2 };
    this.mobileQuery_tablet.addListener(this._mobileQueryListener_tablet);

    this.mobileQuery_mobile = media.matchMedia('(max-width: 767px)');
    this._mobileQueryListener_mobile = () => {changeDetectorRef.detectChanges(); this.columnas = 1 };
    this.mobileQuery_mobile.addListener(this._mobileQueryListener_mobile);
    //     this.filtro = {
    //             pagina : 1,
    //             limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
    //             order : ['id'],
    //             where : {},
    //             include : []
    //         }

    // ProyectoService.paginacion(this.filtro)
    // .then(response => this.proyectos = response)

  }

  verMetricas(proyecto){
    
    this.valor=(proyecto.acumulado*100)/proyecto.meta
    this.dosDecimales(this.valor)
    this.value_fecha  = proyecto.plazo;
    this.metrica = proyecto;
    this.habilitado = true;
  }

  private dosDecimales(valor){
    let recorte =valor.toString();
    let regex=/(\d*.\d{0,2})/;
    this.value = recorte.match(regex)[0];
  }

  ocultarMetricas(){
    this.habilitado = false;
  }  

  ngOnInit() {

    this.proyectos.forEach(n => this.value = n.porcentaje);

    if($(window).width() > 1300){
      this.columnas = 2
    }else if(($(window).width() > 1000) && ($(window).width() < 1299)){
      this.columnas = 2
    }else if(($(window).width() > 768) && ($(window).width() < 99)){
      this.columnas = 2
    }else if($(window).widt() < 768){
      this.columnas = 1
    }

  }

  ngOnDestroy(){
    this.mobileQuery_grande.removeListener(this._mobileQueryListener_grande);
    this.mobileQuery_mediana.removeListener(this._mobileQueryListener_mediana);
    this.mobileQuery_tablet.removeListener(this._mobileQueryListener_tablet);
    this.mobileQuery_mobile.removeListener(this._mobileQueryListener_mobile);
  }
}