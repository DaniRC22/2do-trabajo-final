import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { CursosService } from '../../../Service/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createCurso } from '../store/cursos.actions';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.css']
})
export class CursoDialogComponent {
 public profesor = new FormControl('', [Validators.required]);
 public email = new FormControl('', [Validators.required]);
 public curso = new FormControl('', [Validators.required]);
  public cursoForm = new FormGroup({
    profesor: this.profesor,
    email: this.email,
    curso: this.curso
  })

  constructor(
    private readonly matdialog: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Curso | undefined,
  ) {
    if (data) {
      this.cursoForm.patchValue(data);
    }
  }

  close() {
    this.matdialog.close()
  }
}
    // const curso = new Curso(0,this.profesor, this.email, this.curso);
    // this.cursoS.guardar(curso).subscribe(
    //   data => {
    //     this.router.navigate(['/Cursos']);
    //   }
    // )


  // firstNameControl = new FormControl('',[Validators.required, Validators.minLength(2)]);
//   lastName = new FormControl('',[Validators.required, Validators.minLength(6)]);
//   email = new FormControl('', [Validators.required, Validators.email])

//  studentForm = new FormGroup({
//     // primernombre: this.firstNameControl,
//     lastname: this.lastName,
//     email: this.email
//  })

//  constructor(private readonly matdialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Student | undefined,){
//   if (data) {
//     this.studentForm.patchValue(data);
//  }
//  }
//  close() {
//   this.matdialog.closeAll()
