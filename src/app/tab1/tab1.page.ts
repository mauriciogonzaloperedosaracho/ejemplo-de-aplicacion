import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dado1 = 0;
  dado2 = 0;
  dado3 = 0;
  dado4 = 0;
  suma = 0;
  eleccion = '';
  resultado: string;

  constructor() {}

  verificarSimilitud() {

    this.dado1 = Math.floor(Math.random() * 4) + 1;
    this.dado2 = Math.floor(Math.random() * 4) + 1;
    this.dado3 = Math.floor(Math.random() * 4) + 1;
    this.dado4 = Math.floor(Math.random() * 4) + 1;


    this.suma = this.dado1 + this.dado2;

      if (this.dado1 == this.dado2 && this.dado2 == this.dado3 && this.dado3 == this.dado4) {
        this.resultado = 'si';
      }
      else {
        this.resultado = 'no';
      }
    
    
    // En php: $this->suma = $this->dado1 + $this->dado2
  }



}
