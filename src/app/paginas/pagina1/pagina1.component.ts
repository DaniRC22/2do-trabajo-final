import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../shared/modules/students.model';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { CursoDialogComponent } from './curso-dialog/curso-dialog.component';
import { CursosService } from 'src/app/Service/cursos.service';
import { StudentDialogComponent } from 'src/app/shared/components/student-dialog/student-dialog.component';
import { Store } from '@ngrx/store';
import { createCurso, editCurso, loadCursoss, resetCursoState, deleteCurso } from './store/cursos.actions';
import { selectCursosState } from './store/cursos.selectors';
import { EditarComponent } from './curso/editar/editar.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnDestroy {
  curso: Curso[] = [];
  loading = true
  displayedColumns =['id','curso', 'profesor','email','editar','eliminar']
  constructor(private store: Store, private dialog : MatDialog, private router:Router){
    this.store.dispatch(loadCursoss())
  }
  ngOnDestroy(): void {
    this.store.dispatch(resetCursoState());
  }

  ngOnInit(): void {
    this.store.select(selectCursosState)
    .subscribe((state) =>{
      this.curso = state.data
      this.loading = state.loading
    })
  }

  createCurso() {
    const dialog = this.dialog.open(CursoDialogComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        console.log(data),
        this.store.dispatch(createCurso({data}))
      }
    })
  }

  editar(element: Curso) {
         const dialog = this.dialog.open(EditarComponent, {
          data: element
         })
         dialog.afterClosed().subscribe((data) => {
                if (data){
                 console.log(data),
                 this.store.dispatch(editCurso(data))
                }
               })  }  

 delete(id:number) {
  console.log();
this.store.dispatch(deleteCurso({id}));
this.router.navigate(['/Cursos'])
}  
}
          

// creacion 2

  // curso: Curso[] = []
  
  // displayedColumns =['id','curso', 'profesor','email','editar','eliminar']

  // constructor(private readonly dialogService: MatDialog, private cursoS:CursosService){}
  // ngOnInit(): void{
  //   this.cargarCurso()
  //   }
    
  //   cargarCurso(): void{
  //     this.cursoS.lista().subscribe(
  //       data => {
  //       this.curso = data;
  //       }
  //     )
  //   }
  //   editar(element: Student) {
  //     const dialog = this.dialogService.open(StudentDialogComponent, {
  //       data: element
  //     })
  //     dialog.afterClosed().subscribe((data) => {
  //            if (data){
  //             this.cursoS.update(element.id, data)
  //            }
  //           })  }

  //  eliminar(id:Curso){
  //    if(id != undefined){
  //    this.cursoS.delete(id.id).subscribe(
  //    data => {
  //    this.cargarCurso();
  //    },err => {
  //    alert("no se pudo eliminar")
  //    }
  //   )
  //  }}

// Creacion 1 
 // addStudent(){
  //   const dialog = this.dialogService.open(CursoDialogComponent)

  //   dialog.afterClosed().subscribe((value) => {
  //     if (value) {
  //       const lastId = this.students[this.students.length - 1]?.id;

  //       this.students = [...this.students, new Curso(lastId + 1, value.curso, value.profesor, value.email)];
  //     }
  //   })
  // }
  // removeStudent(student: Student) {
  //   this.students = this.students.filter((stu) => stu.id !== student.id);
  // }
  // editStudent(student: Student) {
  //   const dialog = this.dialogService.open(CursoDialogComponent, {
  //     data: student,
  //   })
  //   dialog.afterClosed().subscribe((data) => {
  //     if(data) {
  //       this.students = this.students.map((stu) => stu.id === student.id ? {...stu, ...data} : stu);
  //     }
  //   })
  // }

  // arrayinscripcion = [''];
  // agregarInscripcion(nuevo: string){
  //   this.arrayinscripcion.push(nuevo)
  // }


