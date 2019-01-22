
import { Component, ViewChild, Input, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ServicioService, ProyectoService } from '../../../../servicios';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'chipServicios',
  templateUrl: './chipServicios.component.pug',
  styleUrls: ['./chipServicios.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class ChipserviciosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

	@Input() chips: any[] = [];
	@Input() id: number;
    @Input() servicio = {
        ligarusuario : (x, y) => {
            return new Promise(resolve => resolve())
        },
        desligarusuario: (x, y) => {
            return new Promise(resolve => resolve())
        }
    }
	visible = true;
	selectable = true;
	removable = true;
	addOnBlur = true;
	separatorKeysCodes: number[] = [ENTER, COMMA];

	fruitCtrl = new FormControl();
	filtered: Observable<string[]>;



	allTags: any[] = [];

	@ViewChild('input') input: ElementRef<HTMLInputElement>;
	@ViewChild('auto') matAutocomplete: MatAutocomplete;

    constructor(public route : ActivatedRoute) {
        this.filtered = this.fruitCtrl.valueChanges.pipe(
            startWith(null),
            map((nombre: string | null) => nombre ? this._filter(nombre) : this.allTags.slice()));
        route.params.subscribe(async (res) => {
            ProyectoService.cantidades(res.id).then(response => this.chips = response)
        })
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.allTags.filter(fruit => fruit.nombre.toLowerCase().indexOf(filterValue) === 0);
    }



    // add(event: MatChipInputEvent): void {
    // 	// Add fruit only when MatAutocomplete is not open
    // 	// To make sure this does not conflict with OptionSelected Event
    // 	if (!this.matAutocomplete.isOpen) {
    // 		const input = event.input;
    // 		const value = event.value;

    // 		// Add our fruit
    // 		if ((value || '').trim()) {
    // 			this.chips.push(value.trim());
    // 		}

    // 		// Reset the input value
    // 		if (input) {
    // 			input.value = '';
    // 		}

    // 		this.fruitCtrl.setValue(null);
    // 	}
    // }

    ngOnInit() {
        console.log(this.chips)
        ServicioService.obtener().then(productos => this.allTags = productos).then(algo => console.log(this.allTags))
    }

//
//
// planeta.SubPlanetas.forEach(subPlaneta => {
// 	if(subPlaneta.orbitas.tipo === 4){



	remove(item): void {
		const index = this.chips.indexOf(item);

		if (index >= 0) {

            ServicioService.desligarcantidades(item.id, this.id).then(algo => {
				this.chips.splice(index, 1);
			})
		}
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		let item_ = this.chips.find(item => item.nombre == event.option.value)

		if (!item_) {
			let item = this.allTags.find(item => item.nombre == event.option.value)

            ServicioService.ligarcantidades(item.id,this.id).then(ligado => {
				this.chips.push(item);
				this.input.nativeElement.value = '';
				this.fruitCtrl.setValue(null);
			})
				;
		} else {
			this.input.nativeElement.value = '';
			this.fruitCtrl.setValue(null);
		}
	}
}



