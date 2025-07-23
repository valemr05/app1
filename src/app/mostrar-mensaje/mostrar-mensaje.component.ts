import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
  mostrarMensaje()
  {
    // mensaje a mostrar
    this.mensaje = 'hola, has hecho click en el botón';
  }

  resetearMensaje(): void {
    // reiniciar mensaje:
    this.mensaje = '';
  }

  mensaje: string ='' ;
}
