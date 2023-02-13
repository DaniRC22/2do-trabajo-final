import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
// import { SessionService } from './session.service';
import { LogginForm, User } from 'src/app/shared/modules/user.model';
import { LoginSuccessful, SingleUserResponse } from 'src/app/shared/modules/reqres.interfaces';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setAuthenticatedUser, unsetAuthenticatedUser } from '../store/auth/auth.actions';
import { AppState } from 'src/app/shared/modules/app-state.model';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://reqres.in/api';
  rolTypes: string[] = ['Usuario', 'Administrador'];

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>,
    private router:Router,
  ) {}

  login(userLoggin: LogginForm): Observable<User> {
    const { email, password } = userLoggin;
    const dataLoggin = { email, password }
    return this.httpClient
      .post<LoginSuccessful>(`${this.apiUrl}/login`, dataLoggin)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() =>
          this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
        ),
        map(
          ({ data }) =>
            new User(
              data.id,
              data.email,
              data.first_name,
              data.last_name,
              data.avatar,
              userLoggin.rol
              )
        ),
            tap((user) => this.store.dispatch(setAuthenticatedUser({
              authenticatedUser : user
              
            })))
        
      );
      
  }

  logOut() {
    window.sessionStorage.clear();
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthenticatedUser());
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const lsToken = localStorage.getItem('token')

    return of(lsToken).pipe(
      tap((token) => {
        if (!token) throw new Error('Token invalido')
      }),
      mergeMap((token) => 
        this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
      ),
      tap(({data}) =>
      this.store.dispatch(
        setAuthenticatedUser({
          authenticatedUser: new User(
            data.id,
               data.email,
               data.first_name,
               data.last_name,
               data.avatar,
               ''
          )
        })
      )
      ),
      map((user) => !!user),
      catchError(()=> of(false))
    )
  }
  getRoles() {
    return this.rolTypes;
  }

  public getToken():string{
    return sessionStorage.getItem(TOKEN_KEY)!;
  }


}
