import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NuevoComponenteComponent, InterpolacionComponent, PadreComponent], //importar los nuevos componentes 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HOLA MUNDO';
}
