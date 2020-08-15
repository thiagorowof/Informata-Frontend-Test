import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router){ }
canActivate(){return true}
    //canActivate(){
    //canActivate(
        //next: ActivatedRouteSnapshot,
        //state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
           // if(!this.auth.isLoggedIn){
              //  this.router.navigate(['/home'])
           // }
            //return this.auth.isLoggedIn()
       // }
    
}