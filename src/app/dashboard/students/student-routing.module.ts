import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from "./components/student/students.component";
import { VerMasComponent } from "./pages/ver/ver-mas.component";
import { StudentDialogComponent } from "./pages/student-dialog/student-dialog.component";
import { EditarStudentsComponent } from "./pages/editar-students/editar-students.component";
import { AuthGuard } from "src/app/auth/guards/auth.guard";


const routes: Routes = [{
    path: '',
    component: StudentsComponent
  },
  {
    path: 'crear',
    canActivate: [AuthGuard],
    component: StudentDialogComponent
  },
  {
    path: 'editar/:id',
    canActivate: [AuthGuard],
    component: EditarStudentsComponent
  },
  {
    path: 'vermas/:id',
    component: VerMasComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class studentRouter{}