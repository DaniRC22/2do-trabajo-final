import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { StudentsComponent } from '../paginas/students/students.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './header/header.component';
import { ModulesModule } from './modules/modules.module';
import { MidirectiveDirective } from './midirective.directive';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    PagesComponent,
    StudentDialogComponent,
    MidirectiveDirective
  ],
  imports: [
    CommonModule,
    ModulesModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    PagesComponent,
    StudentDialogComponent,
    MidirectiveDirective
  ]
})
export class SharedModuleModule { }
