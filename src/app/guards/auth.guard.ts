import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private rota: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let sec: string = sessionStorage.getItem('userLogged');

    if(sec == 'on') {
      return true;      
    }
    else{
      this.rota.navigate(['/login']);
      return false;
    }
  }
}
