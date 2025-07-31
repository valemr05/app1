import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from "./hijo/hijo.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from './saludar/saludar.component';
import { ComponenteIfComponent } from './componente-if/componente-if.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NuevoComponenteComponent, InterpolacionComponent, PadreComponent, HijoComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaComponent], //importar los nuevos componentes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Local Reference en Angular';
}
