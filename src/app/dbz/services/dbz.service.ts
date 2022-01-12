import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  
  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];

  constructor() {
    console.log('Serivicio Inizializado');
  }

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  agrearPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
