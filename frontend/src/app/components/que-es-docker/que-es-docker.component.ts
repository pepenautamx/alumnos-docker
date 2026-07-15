import { Component, input } from '@angular/core'; // <-- Importamos 'input'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-que-es-docker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './que-es-docker.component.html',
  styleUrls: ['./que-es-docker.component.css']
})
export class QueEsDockerComponent {
  filtro = input<string>('');
}
