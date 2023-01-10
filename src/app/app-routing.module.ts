import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { StudentsComponent } from './paginas/students/students.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { Pagina2Component } from './paginas/Inscripcion/pagina2.component';
import { VerMasComponent } from './paginas/students/ver/ver-mas.component';

const routes: Routes = [
  {path:'',component: DashboardComponent,
  children: [
    { path:'Alumnos',component: StudentsComponent},
    { path:'Cursos',component: Pagina1Component},
    { path:'Inscripciones',component: Pagina2Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
