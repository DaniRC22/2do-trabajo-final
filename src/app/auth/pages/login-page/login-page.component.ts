import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LogginForm } from 'src/app/shared/modules/user.model';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit,OnDestroy {
  public loading = false;
  rolTypes: string[] = []
  islogged= false;
  userLoggin: LogginForm
  public form = new FormGroup({
    email: new FormControl('michael.lawson@reqres.in', [Validators.required]),
    password: new FormControl('cityslicka', [Validators.required]),
    rol: new FormControl(this.rolTypes, [Validators.required])
  });
  
  
  private destroyed$ = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
    this.rolTypes = this.authService.getRoles();
  }
  ngOnInit(): void {
    
  }


  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  login() {
    this.loading = true
    this.islogged = true
    this.authService.login({
      email: this.form.get('email')?.value || '',
      password: this.form.get('password')?.value || '',
      rol:this.form.get('')?.value || '',
    }).subscribe((user) => {
      this.loading = false
      this.islogged= false
      if (user) {
        this.router.navigate(['Dashboard', 'alumnos'])
      }
      })
  }
}