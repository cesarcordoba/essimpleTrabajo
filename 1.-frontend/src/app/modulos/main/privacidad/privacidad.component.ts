
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash'


@Component({
    selector: 'privacidad',
    templateUrl: 'privacidad.component.pug',
    styleUrls: ['privacidad.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class PrivacidadComponent implements OnInit, AfterViewInit {

    constructor(private router: Router){ }


    ngOnInit(){


    }

    
    ngAfterViewInit(): void {

    }



}
