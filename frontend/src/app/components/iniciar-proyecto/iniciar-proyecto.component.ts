import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iniciar-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iniciar-proyecto.component.html',
  styleUrl: './iniciar-proyecto.component.css'
})
export class IniciarProyectoComponent {
  filtro = input<string>('');
}
