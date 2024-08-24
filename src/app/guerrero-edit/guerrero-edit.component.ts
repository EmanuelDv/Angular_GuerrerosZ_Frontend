import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuerreroService } from '../service/guerrero.service';
import { Guerrero } from '../guerrero.model';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-guerrero-edit',
  templateUrl: './guerrero-edit.component.html',
  styleUrls: ['./guerrero-edit.component.css'] // Asegúrate de que el archivo de estilos exista
})
export class GuerreroEditComponent implements OnInit {
  guerrero: Guerrero = { id: 0, nombre: '', ki: '', anioAparicion: '' ,imagenGuerrero: '',descripcion:''};
  isEdit = false;
  title = 'Editar Guerrero';

  constructor(
    private guerreroService: GuerreroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.guerreroService.getGuerreroById(Number(id)).pipe(
        tap(guerrero => this.guerrero = guerrero),
        catchError(error => {
          console.error('Error al cargar el guerrero', error);
          this.router.navigate(['/']); // Redirige en caso de error
          return of({ id: 0, nombre: '', ki: '', anioAparicion: '' ,descripcion:''});
        })
      ).subscribe();
    } else {
      this.isEdit = false;
    }
  }

  save(): void {
    console.log('Guardando...'); // Verifica si este log aparece
    if (this.isEdit) {
      this.guerreroService.updateGuerrero(this.guerrero).pipe(
        tap(() => {
          console.log('Guerrero actualizado, redirigiendo...'); // Verifica este log
          this.router.navigate(['/']);
        }),
        catchError(error => {
          console.error('Error al actualizar el guerrero', error);
          return of(null); // Evita que se muestre un error en la UI
        })
      ).subscribe();
    } else {
      this.guerreroService.createGuerrero(this.guerrero).pipe(
        tap(() => {
          console.log('Guerrero creado, redirigiendo...'); // Verifica este log
          this.router.navigate(['/']);
        }),
        catchError(error => {
          console.error('Error al crear el guerrero', error);
          return of(null); // Evita que se muestre un error en la UI
        })
      ).subscribe();
    }
  }

  cancel(): void {
    this.router.navigate(['/']); // Redirige al listado de guerreros
  }
}
