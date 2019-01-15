
import { Component, OnInit } from '@angular/core';

import { Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs'
import { FormBuilder, FormGroup } from '@angular/forms';
import {switchMap, debounceTime, tap, finalize} from 'rxjs/operators';
import * as _ from 'lodash'

import { UsuarioService } from '../../../../servicios';
@Component({
  selector: 'buscadorusuarios',
  templateUrl: './buscadorusuarios.component.pug',
  styleUrls: ['./buscadorusuarios.component.styl']
})
export class BuscadorusuariosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    items : Observable<any>;

    itemsfiltrados : any[] = [];
    formulario: FormGroup;
    isLoading = false;

    constructor(private fb: FormBuilder) {

        this.formulario = this.fb.group({
            input: null
        })

        let observador = (value) =>
            Observable.create( (observer: any) => {
                UsuarioService.buscar({nombre : value, status : 1})
                .then((data)=>{
                    observer.next(data);
                 },(reason)=>{
                    observer.error(reason);
                 })
            })

        this.formulario
        .get('input')
        .valueChanges
        .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
            switchMap(value =>
                observador(value)
                .pipe(finalize(() => this.isLoading = false))
        ))
        .subscribe((items : any[]) => {
            console.log(items)
            this.itemsfiltrados = items
        });

  }

  ngOnInit() {



  }
}