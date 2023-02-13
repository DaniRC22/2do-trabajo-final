import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/shared/modules/students.model';

import { Observable, Subject, tap } from 'rxjs';
import { EstudianteService } from 'src/app/Service/estudiante.service';
import { StudentDialogComponent } from '../../pages/student-dialog/student-dialog.component';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  stu : Student [] = [];
  loading = false;
  islogged = false;
   displayedColumns = ['id', 'lastname','email', 'delete', 'edit', 'viewDetail'];
constructor(private estudianteS: EstudianteService, private readonly dialogService: MatDialog, private authS:AuthService){}
ngOnInit(): void{
this.cargarStu();
 if(this.authS.verifyToken()){
  this.islogged= true
 } else {
  this.islogged = false
 }
}

cargarStu(): void{
  this.estudianteS.lista().subscribe(
    data => {
    this.stu = data;
    
    }
  )
}
    editar(element: Student) {
      this.loading = true
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
