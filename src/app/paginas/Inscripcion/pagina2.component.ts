import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CursosService } from 'src/app/Service/cursos.service';
import { EstudianteService } from 'src/app/Service/estudiante.service';
import { InscripcionService } from 'src/app/Service/inscripcion.service';
import { StudentDialogComponent } from 'src/app/shared/components/student-dialog/student-dialog.component';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { Inscripcion } from 'src/app/shared/modules/inscripcion.model';
import { Student } from 'src/app/shared/modules/students.model';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {
  ins: Inscripcion []=[];
  

  displayedColumns =['id','apellido','curso','editar','eliminar']

  constructor(private readonly dialogService: MatDialog, private insS:InscripcionService) { 
    this.ins = this.insS.Ins
  }

addStudent(){
const dialog = this.dialogService.open(StudentDialogComponent)

dialog.afterClosed().subscribe((value) => {
  if (value) {
    const lastId = this.ins[this.ins.length - 1]?.id;
   // this.students.push(new Student(lastId + 1, value.primernombre, value.apellido, true))
   this.ins = [...this.ins, new Inscripcion(lastId + 1,value.apellido, value.curso)];
  }
})
}
removeStudent(ins: Inscripcion) {
  this.ins = this.ins.filter((stu) => stu.id !== ins.id);
}
editStudent(ins: Inscripcion) {
  const dialog = this.dialogService.open(StudentDialogComponent, {
    data: ins,
  })
  dialog.afterClosed().subscribe((data) => {
    if (data) {
      this.ins = this.ins.map((stu) => stu.id === ins.id ? {...stu, ...data} : stu);
    }
  })
}
}


