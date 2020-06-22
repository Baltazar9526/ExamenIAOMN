import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSvc: AuthService, private router: Router){}
  canActivate(): Observable<boolean>{
    return this.authSvc.userData$.pipe(
      map(
        user => {
          if(!user){
            this.router.navigate(['/inicio']);
            return false;
          }
          return true;
        }
      )
    );
  }
}
