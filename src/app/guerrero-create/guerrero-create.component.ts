import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuerreroService } from '../service/guerrero.service';
import { Guerrero } from '../guerrero.model';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-guerrero-create',
  templateUrl: './guerrero-create.component.html',
  styleUrl: './guerrero-create.component.css',
})
export class GuerreroCreateComponent {
  guerrero: Guerrero = {
    id: 0,
    nombre: '',
    ki: '',
    anioAparicion: '',
    imagenGuerrero: '',
  };

  constructor(
    private guerreroService: GuerreroService,
    private router: Router
  ) {}
  save(): void {
    console.log('Creando guerrero...'); // Verifica si este log aparece
    this.guerreroService
      .createGuerrero(this.guerrero)
      .pipe(
        tap(() => {
          console.log('Guerrero creado, redirigiendo...'); // Verifica este log
          this.router.navigate(['/']);
        }),
        catchError((error) => {
          console.error('Error al crear el guerrero', error);
          return of(null); // Evita que se muestre un error en la UI
        })
      )
      .subscribe();
  }

  cancel(): void {
    this.router.navigate(['/']); // Redirige al listado de guerreros
  }
}
