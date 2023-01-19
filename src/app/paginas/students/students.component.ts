import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/shared/modules/students.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';
import { EstudianteService } from '../../Service/estudiante.service';

import { VerMasComponent } from './ver/ver-mas.component';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
//   students: Observable<Student[]>;
//   private destroyed$ = new Subject()
  stu : Student [] = [];
   displayedColumns = ['id', 'lastname','email', 'delete', 'edit', 'viewDetail'];
  //  constructor(private readonly studentsService: EstudianteService, private readonly dialogService: MatDialog) {
  //    this.students = this.studentsService.students$;
  //  }
constructor(private estudianteS: EstudianteService, private readonly dialogService: MatDialog){}
ngOnInit(): void{
this.cargarStu()
}

cargarStu(): void{
  this.estudianteS.lista().subscribe(
    data => {
    this.stu = data;
    }
  )
}
//   ngOnDestroy(): void {
//     this.destroyed$.next(true)
//   }
    editar(element: Student) {
      const dialog = this.dialogService.open(StudentDialogComponent, {
        data: element
      })
      dialog.afterClosed().subscribe((data) => {
             if (data){
              this.estudianteS.update(element.id, data)
             }
            })  }

  
//   editStudent(element: Student) {
//     const dialog = this.dialogService.open(StudentDialogComponent, {
//       data: element
//     })
//     dialog.afterClosed().subscribe((data) => {
//       if (data) {
//         this.studentsService.editStudent(element.id, data);
//       }
//     })
//   }



//   createStudent() {
//     const dialog = this.dialogService.open(StudentDialogComponent)
//     dialog.afterClosed().subscribe((data) => {
//       if (data) {
//         this.studentsService.createStudent({
//           primernombre: data.primernombre, apellido: data.apellido,
//           email: data.email,
//           activo: false
//         });
//       }
//     })
//   }
eliminar(id:Student){
    if(id != undefined){
      this.estudianteS.delete(id.id).subscribe(
        data => {
          this.cargarStu();
        },err => {
          alert("no se pudo eliminar")
        }
      )
    }}
}
//   deleteStudent(element: Student){
//     const dialog = this.studentsService.removeStudent(element.id)
//   }
// }

