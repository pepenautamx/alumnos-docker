import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosService } from './services/alumnos.service';
import { PasoAPasoComponent } from './components/paso-a-paso/paso-a-paso.component';
import { QueEsDockerComponent } from './components/que-es-docker/que-es-docker.component';
import { QueEsCicdComponent } from './components/que-es-cicd/que-es-cicd.component';
import { IniciarProyectoComponent } from './components/iniciar-proyecto/iniciar-proyecto.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PasoAPasoComponent, QueEsDockerComponent, QueEsCicdComponent, IniciarProyectoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private alumnosService = inject(AlumnosService);
  alumnos$!: Observable<any[]>;

  // Señal para saber qué página mostrar: 'alumnos' | 'bitacora' | 'docker'
  paginaActiva = signal<string>('alumnos');

  // Señal para capturar el texto del buscador global de la barra
  terminoBusqueda = signal<string>('');

  ngOnInit() {
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
  }

  // Función para cambiar de pestaña y limpiar el buscador automáticamente
  cambiarPagina(pagina: string) {
    this.paginaActiva.set(pagina);
    this.terminoBusqueda.set(''); // Limpia el buscador al cambiar de sección
  }

  // Captura el evento de escritura del input
  onBuscar(evento: Event) {
    const elemento = evento.target as HTMLInputElement;
    this.terminoBusqueda.set(elemento.value);
  }
}
