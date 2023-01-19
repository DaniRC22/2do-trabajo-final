import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { StudentsComponent } from './paginas/students/students.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { Pagina2Component } from './paginas/Inscripcion/pagina2.component';
import { VerMasComponent } from './paginas/students/ver/ver-mas.component';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { EditarStudentsComponent } from './paginas/students/editar-students/editar-students.component';
import { CursoDialogComponent } from './paginas/pagina1/curso-dialog/curso-dialog.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { EditarInscripcionComponent } from './paginas/Inscripcion/editar/editar-inscripcion/editar-inscripcion.component';
import { GuardarInscripcionComponent } from './paginas/Inscripcion/guardar/guardar-inscripcion/guardar-inscripcion.component';
import { EditarComponent } from './paginas/pagina1/curso/editar/editar.component';


const routes: Routes = [
  {path:'',component: DashboardComponent,
  children: [
    { path:'Alumnos',component: StudentsComponent,
    canActivate: [AuthGuard]},
      {path: 'vermas/:id', component: VerMasComponent},
    {path: 'editar/:id',component:EditarStudentsComponent},
    {path:'crear',component: StudentDialogComponent},
    { path:'Cursos',component: Pagina1Component},
    {path:'crearcurso',component:CursoDialogComponent},
    {path:'editarcurso/:id',component: EditarComponent },
    { path:'Inscripciones',component: Pagina2Component},
    {path:'editarins/:id',component: EditarInscripcionComponent},
    {path:'agregarinscripcion',component: GuardarInscripcionComponent},
    {path: 'auth',
  loadChildren:() => import('./auth/auth.module').then((module) => module.AuthModule)}
  ]},
  {
    path:'**', redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
