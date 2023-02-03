import { Component, Inject } from '@angular/core';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { CursosService } from '../../../../Service/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  profesor = new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.required, Validators.email])
  curso = new FormControl('',[Validators.required])
  editForm = new FormGroup({
    profesor: this.profesor,
    email: this.email,
    curso: this.curso
  });

  constructor(
    private readonly matdialog: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Curso | undefined,
  ) {
    if (data) {
      this.editForm.patchValue(data);
    }
  }

  close() {
    this.matdialog.close()
  }
}
//   curso: Curso = null;

//   constructor(private cursoS:CursosService, private activateRouter: ActivatedRoute, private router: Router) { 
//   }

//   ngOnInit(): void {
//     const id = this.activateRouter.snapshot.params['id'];
//     this.cursoS.update(id, this.curso).subscribe(
//       data => {
//         this.curso = data;
//   }
//   )
// }

//   Editar(): void {
//     const id = this.activateRouter.snapshot.params['id'];
//     this.cursoS.update(id, this.curso).subscribe(
//       data => {
//         this.router.navigate(['curso']);
//       }
//     )
//   }

// }
