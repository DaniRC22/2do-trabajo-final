import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CursoModule } from '../dashboard/cursos/curso.module';
import { MidirectiveDirective } from './midirective.directive';
import { ModulesModule } from './modules/modules.module';


@NgModule({
  declarations: [
  
    MidirectiveDirective,
  ],
  imports: [
    CommonModule,
    ModulesModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    MidirectiveDirective
  ]
})
export class SharedModuleModule { }
