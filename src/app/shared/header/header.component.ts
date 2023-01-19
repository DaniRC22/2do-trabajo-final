import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../modules/user.model';
import { Subject, takeUntil } from 'rxjs';
import { SessionService } from 'src/app/auth/services/session.service';
import { AuthService } from '../../auth/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  isLogged = false;
  @Output() toggleSidebar = new EventEmitter()
  public user: User | null = null;
  private destroyed$ = new Subject();
  constructor(private sessionService: SessionService, private authService: AuthService, private activateRouter:ActivatedRoute, private router:Router) {
    this.sessionService.user$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => {
        if (user) this.user = user;
      })
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

onLogOut():void{
    this.authService.logOut();
    window.location.reload();
  }

 login(){
    this.router.navigate(['/login'])
  }}