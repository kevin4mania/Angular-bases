import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

  nuevo: Personaje = {
    nombre: 'Personaje',
    poder: 0,
  };

  
  // agregarPersonaje(agregar: Personaje) {
  //   // debugger;
  //   // this.personajes.push(agregar);
  // }
}
