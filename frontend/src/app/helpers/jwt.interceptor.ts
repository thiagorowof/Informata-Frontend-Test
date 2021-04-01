import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let jsonCurrentUser = localStorage.getItem('currentUser')
    let currentUser: any
    
    if (jsonCurrentUser) {
      currentUser = JSON.parse(jsonCurrentUser)
    }

    if (currentUser && currentUser.token) {
      request = request.clone({
          setHeaders: { 
              Authorization: `Bearer ${currentUser.token}`
          }
      });
  }

    return next.handle(request);
  }
}
