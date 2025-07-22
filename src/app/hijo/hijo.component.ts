import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
 private title = "Hijo Component";
 
 //typeScript getter to access the title metodo
 get mostrarTitulo(){
    return this.title;
  }

  // javascript getter to access the title
  getTituloJS(): string {
      return this.title;
    }


}
