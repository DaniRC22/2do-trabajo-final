import { Injectable } from '@angular/core';
import { Curso } from '../shared/modules/cursos.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
   URL ='https://63bdfda6f5cfc0949b4fdb0c.mockapi.io/cursos'

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
   public update(id:number, curso:Curso): Observable<Curso>{
     return this.http.put<Curso>(this.URL + `/${id}`, curso);
 }
 }
