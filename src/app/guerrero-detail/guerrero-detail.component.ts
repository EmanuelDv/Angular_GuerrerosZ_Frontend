import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuerreroService } from '../service/guerrero.service';
import { Guerrero } from '../guerrero.model';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-guerrero-detail',
  templateUrl: './guerrero-detail.component.html',
  styleUrls: ['./guerrero-detail.component.css'],
})
export class GuerreroDetailComponent implements OnInit {
  guerrero: Guerrero | undefined;
  error: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private guerreroService: GuerreroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.guerreroService
      .getGuerreroById(id)
      .pipe(
        catchError((error) => {
          this.error = 'Error al obtener el guerrero';
          return of(undefined);
        })
      )
      .subscribe((guerrero) => (this.guerrero = guerrero));
  }
  comeBack(): void {
    this.router.navigate(['/']); // Redirige al listado de guerreros
  }
}
