import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './Inscripcion/pagina2.component';
import { StudentsComponent } from './students/students.component';
import { ModulesModule } from '../shared/modules/modules.module';
import { CursoDialogComponent } from './pagina1/curso-dialog/curso-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerMasComponent } from './students/ver/ver-mas.component';
import { RouterModule } from '@angular/router';
import { EditarStudentsComponent } from './students/editar-students/editar-students.component';
import { paginasRouter } from './paginas-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { EditarInscripcionComponent } from './Inscripcion/editar/editar-inscripcion/editar-inscripcion.component';
import { GuardarInscripcionComponent } from './Inscripcion/guardar/guardar-inscripcion/guardar-inscripcion.component';
import { EditarComponent } from './pagina1/curso/editar/editar.component';



@NgModule({
  declarations: [
    StudentsComponent,
    Pagina1Component,
    Pagina2Component,
    CursoDialogComponent,
    VerMasComponent,
    EditarStudentsComponent,
    EditarInscripcionComponent,
    GuardarInscripcionComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    ModulesModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    paginasRouter,
    AppRoutingModule
  ],
  exports:[
    StudentsComponent,
    Pagina1Component,
    Pagina2Component,
    VerMasComponent
  ]
})
export class PaginasModule { }
