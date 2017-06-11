import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private rota: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    
    if(Boolean(sessionStorage.getItem('userLogged'))) {
      alert('rota true');
      return true;      
    }
    else{
      this.rota.navigate(['/login']);
      alert('rota false');
      
      return false;
    }
  }
}
