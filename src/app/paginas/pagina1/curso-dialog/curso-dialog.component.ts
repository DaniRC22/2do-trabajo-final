import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/shared/modules/cursos.model';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.css']
})
export class CursoDialogComponent {
  curso = new FormControl('',[Validators.required, Validators.minLength(2)]);
  profesor = new FormControl('',[Validators.required, Validators.minLength(2)]);
  email = new FormControl('', [Validators.required, Validators.email])

 cursoForm = new FormGroup({
    curso: this.curso,
    profesor: this.profesor,
    email: this.email
 })

 constructor(private readonly matdialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Curso | null,){
  console.log(data);
 }

 close() {
  this.matdialog.closeAll()
 }

}
