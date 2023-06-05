import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(state.url);
    
      // if(state.url == "/login"){
      //   localStorage.removeItem('token');
      //   return true;
      // }

      let token = localStorage.getItem('token');
      if(!token){
        this.router.navigate(['/login']);
        return false;
      }
      else{
        this.router.navigate(['/profile']);
        return true;
      }
    }
}
