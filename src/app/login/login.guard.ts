import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {BookMyMovieService} from '../book-my-movie.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private service: BookMyMovieService, private router: Router) { }
    canActivate(): boolean {
        if (this.service.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
