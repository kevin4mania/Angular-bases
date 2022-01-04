import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <h1>La base es:{{ base }}</h1>

    <button (click)="acumular(base)">+{{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'bases';
  numero: number = 10;
  base: number = 4;

  acumular(valor: number) {
    this.numero += valor;
  }
}
