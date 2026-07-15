import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-que-es-cicd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './que-es-cicd.component.html',
  styleUrl: './que-es-cicd.component.css'
})
export class QueEsCicdComponent {
  filtro = input<string>('');
}
