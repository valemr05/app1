import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  title = "Universidad Tecnológica de Pereira";
  user = { 
    name: "ValMr",
    age: 25
  };

  //definir un metodo 
  greet(){

    return `Hola, ${this.user.name}, es un gusto que estes aquí`;  //se interpolan las variables
  }
}

