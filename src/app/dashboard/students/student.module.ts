import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ModulesModule } from "src/app/shared/modules/modules.module";
import { paginasRouter } from "../paginas-routing.module";

import { studentRouter } from "./student-routing.module";
import { StudentsComponent } from './components/student/students.component';
import { EditarStudentsComponent } from "./pages/editar-students/editar-students.component";
import { VerMasComponent } from "./pages/ver/ver-mas.component";
import { EditarComponent } from "../cursos/pages/curso/editar/editar.component";
import { StudentDialogComponent } from './pages/student-dialog/student-dialog.component';

@NgModule({
    declarations: [
      VerMasComponent,
      StudentDialogComponent,
      StudentsComponent,
      EditarStudentsComponent
    ],
    imports: [
      CommonModule,
      ModulesModule,
      ReactiveFormsModule,
      RouterModule,
      FormsModule,
      studentRouter
    ],
    exports:[
    ]
  })
  export class studentModule { }