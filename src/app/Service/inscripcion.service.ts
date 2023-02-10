import { Injectable } from '@angular/core';
import { Inscripcion } from '../shared/modules/inscripcion.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
    URL= environment.URL;

    constructor(private http:HttpClient) { }

    public lista(): Observable<Inscripcion[]> {
      return this.http.get<Inscripcion[]>(this.URL);
    }
    public detalle(id:number): Observable<Inscripcion>{
      return this.http.get<Inscripcion>(this.URL + `/${id}`);
    }
  
    public guardar(inscripcion :Inscripcion): Observable<Inscripcion> {
      return this.http.post<Inscripcion>(this.URL, inscripcion);
  
    }
    public delete(id:number): Observable<any>{
      return this.http.delete<any>(this.URL + `/${id}`);
    }
    public update(id:number, inscripcion:Inscripcion): Observable<any>{
      return this.http.put<any>(this.URL + `/${id}`, inscripcion);
 }
 }
