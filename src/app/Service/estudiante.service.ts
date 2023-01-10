import { Injectable } from '@angular/core';
import { Student } from '../shared/modules/students.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  students: Student[] = [
    new Student(1,'Daniel', 'Rivero','dr@hotmail.com', true),
    new Student(2, 'Matias', 'Bueno','mb@hotmail.com', false),
    new Student(3, 'Sebastian', 'Miloro','sm@hotmail.com', false),
    new Student(4,'Karen', 'Rosales','kr@hotmail.com', true),
  ]

  constructor() { }

  agregarEstudiante(student:Student){
    this.students.push(student);
  }
}
