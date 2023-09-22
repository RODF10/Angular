import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';

  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;

  constructor(){}

  onSumar():void {
    this.resultado = this.operandoA + this.operandoB;
  }
}
