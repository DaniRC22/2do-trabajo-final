import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authRouting } from './auth-routing.module';
import { ModulesModule } from '../shared/modules/modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    authRouting,
    ModulesModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
