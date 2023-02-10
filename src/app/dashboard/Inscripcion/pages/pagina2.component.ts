import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionService } from 'src/app/Service/inscripcion.service';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { Inscripcion } from 'src/app/shared/modules/inscripcion.model';
import { Student } from 'src/app/shared/modules/students.model';
import { StudentDialogComponent } from '../../students/pages/student-dialog/student-dialog.component';
import { CursosService } from '../../../Service/cursos.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})

export class Pagina2Component implements OnInit {
  ins: Inscripcion []=[];
  islogged = false

  displayedColumns =['id','lastname','curso','editar','eliminar']

  constructor(private readonly dialogService: MatDialog, private insS:InscripcionService,private authS:AuthService) { }
ngOnInit(): void{
    this.cargarInscripciones()
    }
    
    cargarInscripciones(): void{
      this.insS.lista().subscribe(
        data => {
        this.ins = data;
        }
      )
    }

    editar(element: Student) {
      const dialog = this.dialogService.open(StudentDialogComponent, {
        data: element
      })
      dialog.afterClosed().subscribe((data) => {
             if (data){
              this.insS.update(element.id, data)
             }
            })  }

  eliminar(id:Inscripcion){
 if(id != undefined){
  this.insS.delete(id.id).subscribe(
  data => {
  this.cargarInscripciones();
  },err => {
  alert("no se pudo eliminar")
     }
)
}}
}


