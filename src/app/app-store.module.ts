import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthStoreModule } from './auth/auth-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  EffectsModule.forRoot([]),
  AuthStoreModule,
]})
export class AppStoreModule { }
