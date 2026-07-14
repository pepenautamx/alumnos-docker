import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosService } from './services/alumnos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private alumnosService = inject(AlumnosService);
  alumnos$!: Observable<any[]>;

  ngOnInit() {
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
  }
}
