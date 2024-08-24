import { Component, OnInit } from '@angular/core';
import { GuerreroService } from '../service/guerrero.service';
import { Guerrero } from '../guerrero.model';
// import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-guerrero-list',
  templateUrl: './guerrero-list.component.html',
  styleUrl: './guerrero-list.component.css',
})
export class GuerreroListComponent implements OnInit {
  guerreros: Guerrero[] = [];

  constructor(
    private guerreroService: GuerreroService,
    // private router: Router
  ) {}

  ngOnInit(): void {
    this.loadGuerreros();
  }

  loadGuerreros(): void {
    this.guerreroService
      .getGuerreros()
      .pipe(
        tap((guerreros) => (this.guerreros = guerreros)),
        catchError((error) => {
          console.error('Error al cargar los guerreros', error);
          return of([]);
        })
      )
      .subscribe();
  }

  deleteGuerrero(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este guerrero?')) {
      this.guerreroService
        .deleteGuerrero(id)
        .pipe(//maneja las respuestas
          tap(() => {//Este operador se utiliza para realizar acciones secundarias (side effects) sin modificar la respuesta del Observable.
            this.guerreros = this.guerreros.filter(
              (guerrero) => guerrero.id !== id
            );
            console.log('Guerrero eliminado Exitosamente');
          }),
          catchError((error) => {
            console.error('Error al eliminar el guerrero', error);
            return of(null);//of convierte en observables
          })
        )
        .subscribe();//subscribe() finaliza la operación, haciendo que todo lo anterior se ejecute.
    }
  }
}
