import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../modules/user.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { authenticatedUserSelector } from 'src/app/auth/store/auth/auth.selectors';
import { AppState } from '../modules/app-state.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  @Output() toggleSidebar = new EventEmitter()
  // public user: User | null = null;
  public user: Observable<User | null>;
  private destroyed$ = new Subject();
  constructor(private readonly store: Store<AppState>, private authService: AuthService, private activateRouter:ActivatedRoute, private router:Router) {
   this.user = this.store.select(authenticatedUserSelector)
  }
  ngOnDestroy(): void {}

 onLogOut():void{
     this.authService.logOut();
     window.location.reload();
   }

  login(){
     this.router.navigate(['/login'])
  }
}