import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash'


@Component({
    selector: 'terminos',
    templateUrl: 'terminos.component.pug',
    styleUrls: ['terminos.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class TerminosComponent implements OnInit, AfterViewInit {

    constructor(private router: Router){ }


    ngOnInit(){

        
    }


    ngAfterViewInit(): void {

    }


}
