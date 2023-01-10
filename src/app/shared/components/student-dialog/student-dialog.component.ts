import { Component, Inject,} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Student } from '../../modules/students.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent {
  firstNameControl = new FormControl('',[Validators.required, Validators.minLength(2)]);
  lastNameControl = new FormControl('',[Validators.required, Validators.minLength(2)]);
  email = new FormControl('', [Validators.required, Validators.email])

 studentForm = new FormGroup({
    primernombre: this.firstNameControl,
    apellido: this.lastNameControl,
    email: this.email
 })

 constructor(private readonly matdialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Student | null,){
  console.log(data);
 }

 close() {
  this.matdialog.closeAll()
 }

}
