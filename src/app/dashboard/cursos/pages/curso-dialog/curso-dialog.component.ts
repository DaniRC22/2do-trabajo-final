import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/shared/modules/cursos.model';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.css']
})
export class CursoDialogComponent {
 public profesor = new FormControl('', [Validators.required, Validators.minLength(3)]);
 public email = new FormControl('', [Validators.required, Validators.email]);
 public curso = new FormControl('', [Validators.required]);
  public cursoForm = new FormGroup({
    profesor: this.profesor,
    email: this.email,
    curso: this.curso
  })
  displayedColumns = ['id', 'profesor','email', 'curso'];

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