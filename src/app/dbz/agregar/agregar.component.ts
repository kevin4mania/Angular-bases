import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  constructor(private dbzService: DbzService) {}

  agregar() {
    // event.preventDefault();
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agrearPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
