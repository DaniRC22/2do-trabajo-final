import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/shared/modules/students.model';

import { Observable, Subject } from 'rxjs';
import { EstudianteService } from 'src/app/Service/estudiante.service';
import { StudentDialogComponent } from '../../pages/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  stu : Student [] = [];
  islogged= false;
   displayedColumns = ['id', 'lastname','email', 'delete', 'edit', 'viewDetail'];
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
    editar(element: Student) {
      const dialog = this.dialogService.open(StudentDialogComponent, {
        data: element
      })
      dialog.afterClosed().subscribe((data) => {
             if (data){
              this.estudianteS.update(element.id, data)
             }
            })  }

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
