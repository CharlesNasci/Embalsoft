import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, throwError, EMPTY } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { LoginService } from '../login.service';

@Injectable()
export class TokensInterceptor implements HttpInterceptor {
  refreshTokenTry = 0;
  refreshTokenInProgress = false;
  tokenRefreshedSource = new Subject<void>();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  constructor(private loginService: LoginService, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.url == 'https://localhost:5001/api/Account/login') {
          return next.handle(request);
        }
        return this.handleResponseError(error, request, next);
      })
    );
  }
  handleResponseError(error: any, request?: any, next?: any): Observable<any> {
    return EMPTY;
  }
  logout() {
    console.clear();
    this.refreshTokenTry = 0;
    //console.log('Logout User');
    this.router.navigate(['/login']);
  }
}
