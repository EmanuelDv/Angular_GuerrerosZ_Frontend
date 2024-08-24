import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Guerrero } from '../guerrero.model';

@Injectable({
  providedIn: 'root'
})
export class GuerreroService {
  private apiUrl = 'https://nodejs-api-dragonball.onrender.com/api/guerreros'; // URL de tu API

  constructor(private http: HttpClient) {}

  getGuerreros(): Observable<Guerrero[]> {
    return this.http.get<Guerrero[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener los guerreros', error);
        return throwError(() => new Error('Error al obtener los guerreros'));//repasar este codigo
      })
    );
  }

  getGuerreroById(id: number): Observable<Guerrero> {
    return this.http.get<Guerrero>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error al obtener el guerrero', error);
        return throwError(() => new Error('Error al obtener el guerrero'));
      })
    );
  }

  createGuerrero(guerrero: Guerrero): Observable<Guerrero> {
    return this.http.post<Guerrero>(this.apiUrl, guerrero).pipe(
      catchError(error => {
        console.error('Error al crear el guerrero', error);
        return throwError(() => new Error('Error al crear el guerrero'));
      })
    );
  }

  updateGuerrero(guerrero: Guerrero): Observable<Guerrero> {
    return this.http.put<Guerrero>(`${this.apiUrl}/${guerrero.id}`, guerrero).pipe(
      catchError(error => {
        console.error('Error al actualizar el guerrero', error);
        return throwError(() => new Error('Error al actualizar el guerrero'));
      })
    );
  }

  deleteGuerrero(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error al eliminar el guerrero', error);
        return throwError(() => new Error('Error al eliminar el guerrero'));
      })
    );
  }
}
