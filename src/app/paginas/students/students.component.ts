import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/shared/modules/students.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';
import { EstudianteService } from '../../Service/estudiante.service';
import { Router } from '@angular/router';
import { VerMasComponent } from './ver/ver-mas.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Student[] = []
  
  displayedColumns =['id','primernombre', 'apellido','email', 'info','editar','eliminar']

  constructor(private readonly dialogService: MatDialog, private estudianteS: EstudianteService, private router: Router) { 
    this.students = this.estudianteS.students
  }

addStudent(){
const dialog = this.dialogService.open(StudentDialogComponent)

dialog.afterClosed().subscribe((value) => {
  if (value) {
    const lastId = this.students[this.students.length - 1]?.id;
   // this.students.push(new Student(lastId + 1, value.primernombre, value.apellido, true))
   this.students = [...this.students, new Student(lastId + 1, value.primernombre, value.apellido, value.email, true)];
  }
})
}
removeStudent(student: Student) {
  this.students = this.students.filter((stu) => stu.id !== student.id);
}
editStudent(student: Student) {
  const dialog = this.dialogService.open(StudentDialogComponent, {
    data: student,
  })
  dialog.afterClosed().subscribe((data) => {
    if (data) {
      this.students = this.students.map((stu) => stu.id === student.id ? {...stu, ...data} : stu);
    }
  })
}
openDialog(student:Student) {
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
