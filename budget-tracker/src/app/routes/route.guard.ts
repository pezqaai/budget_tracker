import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RouteGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return next.data.roles == null ? true : next.data.roles.includes(this.authService.user.role)
  }

  canActivateChild(next: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state)
  }
}
