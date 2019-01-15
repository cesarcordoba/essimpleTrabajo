
import { Component, OnInit, Input } from '@angular/core';

import { MultimediaService, AWSService, PortadaService } from '../../../../../servicios';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmDelDialogComponent } from '../../../fragments/confirm-del-dialog/confirm-del-dialog.component';
//-import { ConfirmDelDialogComponent } from 'src/app/modulos/admin/fragments/confirm-del-dialog/confirm-del-dialog.component';

@Component({
  selector: 'gridimgproyectos',
  templateUrl: './gridimgproyectos.component.pug',
  styleUrls: ['./gridimgproyectos.component.styl'],
  providers: [AWSService]
})
export class GridimgproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() proyecto

    // multimedias = {
    //     items : []
    // }
    // filtro : any;
    columnas = 4
    height = '200px'
    colspan = 1
    rowspan = 1
    carga = false;

    constructor(public snack: MatSnackBar, public _dialog: MatDialog, private _aws: AWSService) {
    //     this.filtro = {
    //             pagina : 1,
    //             limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  8 :  3,
    //             order : ['id'],
    //             where : {},
    //             include : []
    //         }

            
    // MultimediaService.xProyecto(this.id)
    // .then(response => this.multimedias = response)
    // .then(() => console.log(this.multimedias))
   

  }

    borrar(file) {
      this._dialog.open(ConfirmDelDialogComponent, {
        disableClose: true,
      }).afterClosed().subscribe(result => {
        if (result) {
          //this.empezandoBorrado()
          this.eliminarArchivo(file)
        }
      });
      }

    eliminarArchivo(file){
      console.log(file)
      this._aws.borrarArchivo(file.key, 'bull-imagenes', 'esimple-imagenes/').subscribe(eliminado =>{
        if(eliminado == true){
          MultimediaService.eliminar(file.id)
          this.snack.open("Eliminada correctamente", "", {duration: 900});
        }
        else{
        this.snack.open('Error al eliminar algunos de los archivos', "", {duration: 900});
        }
      })
  }

  mandarABorrarPortada(file) {
    this._dialog.open(ConfirmDelDialogComponent, {
      disableClose: true,
    }).afterClosed().subscribe(result => {
      if (result) {
        //this.empezandoBorrado()
        this.borrarPortada(file)
      }
    });
    }

  borrarPortada(portada){
    this._aws.borrarArchivo(portada.key, 'bull-imagenes', 'esimple-imagenes/').subscribe(eliminado =>{
      if(eliminado == true){
        PortadaService.eliminar(portada.id)
        this.snack.open("Eliminada correctamente", "", {duration: 900});
      }
      else{
      this.snack.open('Error al eliminar algunos de los archivos', "", {duration: 900});
      }
    })
  }

  ngOnInit() {


  }
}