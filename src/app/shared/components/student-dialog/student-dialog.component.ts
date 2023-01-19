import { Component, Inject,} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Student } from '../../modules/students.model';
import { EstudianteService } from '../../../Service/estudiante.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent {
  lastname: string = ''
  email: string = ''
  constructor(private estudianteS:EstudianteService, private router: Router, private activatedRouted: ActivatedRoute){}
  
  Create(){
    const estudiante = new Student(0,this.lastname, this.email);
    this.estudianteS.guardar(estudiante).subscribe(
      data => {
        this.router.navigate(['Alumnos']);
      }
    )
  }
  
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
 }
