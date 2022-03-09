import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {

constructor(private router:Router){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(sessionStorage.getItem("logeado")=="false"){
      return true;
    }
    else{
      window.location.href="/nodisponible";
      //this.router.navigate(['nodisponible']);
      // console.log("Deniega")
      // alert("No puedes accedes a esta ruta estando logeado")
      // window.location.href="";
      return false;
    }
  }
  
}
