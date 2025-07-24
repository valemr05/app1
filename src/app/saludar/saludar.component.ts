import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-saludar',
  standalone: true,
  imports: [FormsModule], // Import FormsModule for ngModel
  templateUrl: './saludar.component.html',
  styleUrl: './saludar.component.css'
})
export class SaludarComponent {
  saludo = 'saludo inicial';
}
