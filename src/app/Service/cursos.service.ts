import { Injectable } from '@angular/core';
import { Curso } from '../shared/modules/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos: Curso[] = [
    new Curso(1,'Matematicas','Roberto','matematicas@hotmail.com' ),
    new Curso(2, 'Lengua','Alberto','lengua@hotmail.com'),
    new Curso(3, 'Ingles','Julia','ingles@hotmail.com'),
    new Curso(4, 'Sociales','Julia','sociales@hotmail.com'),
  ]

  constructor() { }
}
