import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './Inscripcion/pagina2.component';
import { StudentsComponent } from './students/students.component';
import { ModulesModule } from '../shared/modules/modules.module';
import { CursoDialogComponent } from './pagina1/curso-dialog/curso-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerMasComponent } from './students/ver/ver-mas.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentsComponent,
    Pagina1Component,
    Pagina2Component,
    CursoDialogComponent,
    VerMasComponent,
  ],
  imports: [
    CommonModule,
    ModulesModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    StudentsComponent,
    Pagina1Component,
    Pagina2Component,
    VerMasComponent
  ]
})
export class PaginasModule { }
