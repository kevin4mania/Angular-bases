import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'otro', 'otro2'];
  heroeBorrado: string = '';
  // isBorrado:boolean=false;
  borrarHeroe() {
    // this.isBorrado=true;
    // this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
