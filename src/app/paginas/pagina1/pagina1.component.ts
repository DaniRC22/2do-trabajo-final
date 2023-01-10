import { Component } from '@angular/core';
import { Student } from '../../shared/modules/students.model';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { CursoDialogComponent } from './curso-dialog/curso-dialog.component';
import { CursosService } from 'src/app/Service/cursos.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {
  students: Curso[] = []
  
  displayedColumns =['id','curso', 'profesor','email','editar','eliminar']

  constructor(private readonly dialogService: MatDialog, private cursoS:CursosService){
    this.students = this.cursoS.cursos 
  }
  
  addStudent(){
    const dialog = this.dialogService.open(CursoDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;

        this.students = [...this.students, new Curso(lastId + 1, value.curso, value.profesor, value.email)];
      }
    })
  }
  removeStudent(student: Student) {
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }
  editStudent(student: Student) {
    const dialog = this.dialogService.open(CursoDialogComponent, {
      data: student,
    })
    dialog.afterClosed().subscribe((data) => {
      if(data) {
        this.students = this.students.map((stu) => stu.id === student.id ? {...stu, ...data} : stu);
      }
    })
  }

  arrayinscripcion = [''];
  agregarInscripcion(nuevo: string){
    this.arrayinscripcion.push(nuevo)
  }

}
