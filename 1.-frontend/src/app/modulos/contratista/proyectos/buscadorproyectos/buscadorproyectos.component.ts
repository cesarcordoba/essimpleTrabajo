
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs'
import { FormBuilder, FormGroup } from '@angular/forms';
import {switchMap, debounceTime, tap, finalize} from 'rxjs/operators';
import * as _ from 'lodash'
import { NuevoProyectoComponent } from '../nuevo-proyecto/nuevo-proyecto.component';
import { ProyectoService, ContratistaService } from '../../../../servicios';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'buscadorproyectos',
  templateUrl: './buscadorproyectos.component.pug',
  styleUrls: ['./buscadorproyectos.component.styl']
})
export class BuscadorproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    items : Observable<any>;

    itemsfiltrados : any[] = [];
    formulario: FormGroup;
    isLoading = false;
    proyectos = {
        items : []
      }
    @Input() usuario

    constructor(private fb: FormBuilder, private dialog: MatDialog) {

        this.formulario = this.fb.group({
            input: null
        })

        let observador = (value) =>
            Observable.create( (observer: any) => {
                ProyectoService.buscar({nombre : value, status : 1})
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

        nuevoProyecto(){
            this.dialog.open(NuevoProyectoComponent ,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
                ProyectoService.crear(result)
                .then(response => {
                    console.log(response);
                    // console(response)
                    let peticion ={
                        IdProyecto: response.id,
                        IdUsuario: this.usuario.id
                    }
                    ContratistaService.crear(peticion)
                    this.proyectos.items.push(response)
                })
            : null;
            });
        }

  ngOnInit() {



  }
}