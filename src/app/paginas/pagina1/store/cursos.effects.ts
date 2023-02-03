import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CursosActions from './cursos.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { editCursoSuccess } from './cursos.actions';


@Injectable()
export class CursosEffects {
private baseURL = 'https://63bdfda6f5cfc0949b4fdb0c.mockapi.io/cursos'

  loadCursoss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CursosActions.loadCursoss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.lista().pipe(
          map(data => CursosActions.loadCursossSuccess({ data })),
          catchError(error => of(CursosActions.loadCursossFailure({ error }))))
      )
    );
  });

  CreateCurso$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CursosActions.createCurso),
      concatMap((action) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.guardar(action.data).pipe(
          map((response) => CursosActions.createCursoSuccess({ data: response })),
          catchError((error) => of(CursosActions.createCursoFailure({ error }))))
      )
    );
  });

  EditCurso$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CursosActions.editCurso),
      concatMap((action ) =>
      this.update(action.id).pipe(
        map((response) => CursosActions.createCursoSuccess({ data: response })),
        catchError((error) => of(CursosActions.createCursoFailure({ error }))))
    ))
  });

   DeleteCurso$ = createEffect(() => {
     return this.actions$.pipe( 

       ofType(CursosActions.deleteCurso),
       concatMap((action) =>
         /** An EMPTY observable only emits completion. Replace with your own observable API request */
         this.delete(action.id).pipe(
           map(() => CursosActions.deleteCursoSuccess(action)),
           catchError((error) => of(CursosActions.deleteCursoFailure({ error }))))
       )
     );
   });

  constructor(private actions$: Actions, private http: HttpClient) {}

  private lista(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseURL);
  }
  
  private guardar(data: { curso: string, profesor: string, email: string }): Observable<Curso> {
    return this.http.post<Curso>(this.baseURL, data);

}
  private update(id:number): Observable<Curso>{
    return this.http.put<Curso>(this.baseURL + `/${id}`,);
}

private delete(id:number): Observable<Curso>{
  return this.http.delete<Curso>(this.baseURL + `/${id}`);
}
}
