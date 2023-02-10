import { Injectable } from '@angular/core';
import { Student } from '../shared/modules/students.model';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
    URL = environment.URL;
  constructor( private http: HttpClient) {
  }

  public lista(): Observable<Student[]> {
    return this.http.get<Student[]>(this.URL);
  }
  public detalle(id:number): Observable<Student>{
    return this.http.get<Student>(this.URL + `/${id}`);
  }
  
  public guardar(usuarios:Student): Observable<Student> {
    return this.http.post<Student>(this.URL, usuarios);
  
  }
  public delete(id:number): Observable<any>{
    return this.http.delete<any>(this.URL + `/${id}`);
  }
  public update(id:number, usuarios:Student): Observable<any>{
    return this.http.put<any>(this.URL + `/${id}`, usuarios);
  }
}
