import { Component, input } from '@angular/core'; // <-- Importamos 'input'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paso-a-paso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paso-a-paso.component.html',
  styleUrls: ['./paso-a-paso.component.css']
})
export class PasoAPasoComponent {
  // Recibe la búsqueda del padre de forma reactiva
  filtro = input<string>('');
}
