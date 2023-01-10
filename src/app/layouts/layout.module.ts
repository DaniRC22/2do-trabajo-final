import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Layout1Module } from '../layout/layout1.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module.module';
import { PaginasModule } from '../paginas/paginas.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    Layout1Module,
    ReactiveFormsModule,
    RouterModule,
    SharedModuleModule,
    PaginasModule
   ],
  exports: [
  ]
})
export class LayoutModule { }
