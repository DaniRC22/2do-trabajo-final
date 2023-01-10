import { Component, Input } from '@angular/core';
import { CursosService } from '../../../Service/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/shared/modules/students.model';
import { EstudianteService } from 'src/app/Service/estudiante.service';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent {
  students: Student[] = [];
  curso: Curso[] = [];
  
  displayedColumns =['id','apellido','curso']


  constructor(private cursoS:CursosService, private readonly dialogService: MatDialog, private estudianteS: EstudianteService,
    private route:ActivatedRoute){
    this.students = this.estudianteS.students
    this.curso = this.cursoS.cursos
  }

  removeStudent(student: Student) {
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }
  editStudent(student: Student) {
    const dialog = this.dialogService.open(VerMasComponent, {
      data: student,
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.students = this.students.map((stu) => stu.id === student.id ? {...stu, ...data} : stu);
      }
    })
  }
}
