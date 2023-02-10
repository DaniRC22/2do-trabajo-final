import { Component, Inject,} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EstudianteService } from 'src/app/Service/estudiante.service';
import { Student } from 'src/app/shared/modules/students.model';

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
        this.router.navigate(['Dashboard','alumnos']);
      }
    )
  }
 }
