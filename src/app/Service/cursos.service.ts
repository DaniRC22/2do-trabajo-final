import { Injectable } from '@angular/core';
import { Curso } from '../shared/modules/cursos.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  // cursos: Curso[] = [
  //   new Curso(1,'Matematicas','Roberto','matematicas@hotmail.com' ),
  //   new Curso(2, 'Lengua','Alberto','lengua@hotmail.com'),
  //   new Curso(3, 'Ingles','Julia','ingles@hotmail.com'),
  //   new Curso(4, 'Sociales','Julia','sociales@hotmail.com'),
  // ]
   URL = environment.URL;

   constructor(private http:HttpClient) { }
   public lista(): Observable<Curso[]> {
     return this.http.get<Curso[]>(this.URL);
   }
   public detalle(id:number): Observable<Curso>{
     return this.http.get<Curso>(this.URL + `/${id}`);
   }
  
   public guardar(curso :Curso): Observable<Curso> {
     return this.http.post<Curso>(this.URL, curso);
  
   }
   public delete(id:number): Observable<any>{
     return this.http.delete<any>(this.URL + `/${id}`);
   }
   public update(id:number, curso:Curso): Observable<any>{
     return this.http.put<any>(this.URL + `/${id}`, curso);
 }
 }
