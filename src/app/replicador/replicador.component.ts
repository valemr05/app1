import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  standalone: true,
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {
  texto: string = '';
  actualizarTexto(event: Event) {
    const elementoInput = event.target as HTMLInputElement;  // obtenemos el elemento input
    this.texto = elementoInput.value;  //recuperamos el valor del input
  }
}
