import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

// Definimos el mismo query exacto que probamos con éxito en el Sandbox
const GET_ALUMNOS = gql`
  query ObtenerAlumnos {
    alumnos {
      id
      nombre
      apellidos
      matematicas
      espanol
      historia
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private apollo = inject(Apollo);

  obtenerAlumnos() {
    return this.apollo
      .watchQuery<any>({
        query: GET_ALUMNOS,
      })
      .valueChanges.pipe(
        map((result) => {
          // Si por alguna razón 'data' no viene, devolvemos un arreglo vacío en lugar de romper la app
          return result?.data ? result.data.alumnos : [];
        })
      );
  }
}
