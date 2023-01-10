import { Injectable } from '@angular/core';
import { Inscripcion } from '../shared/modules/inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  Ins: Inscripcion[] = [
    new Inscripcion(1,'Matematicas','Rivero' ),
    new Inscripcion(2, 'Lengua','asf'),
    new Inscripcion(3, 'Ingles','asda'),
    new Inscripcion(4, 'Sociales','asfasf'),
  ]
  constructor() { }
}
