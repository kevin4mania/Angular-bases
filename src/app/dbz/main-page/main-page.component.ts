import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];

  agregarPersonaje(agregar: Personaje) {
    this.personajes.push(agregar);
  }
}