import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let users: any[] = JSON.parse(localStorage.getItem('users') || '[]')

    return of(null).pipe(mergeMap(() => {

      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        let filteredUsers = users.filter(user => {
            return user.email === request.body.email && user.password === request.body.password;
        });

        if (filteredUsers.length) {
          
            let user = filteredUsers[0];
            let body = {
                id: user.id,
                email: user.email,
                token: 'fake-jwt-token'
            };

            return of(new HttpResponse({ status: 200, body: body }));
        } else {
            return throwError({ error: { message: 'Usuário ou senha incorreta' } });
        }
      }

      if (request.url.endsWith('/users/register') && request.method === 'POST') {
  
        let newUser = request.body;

        let duplicateUser = users.filter(user => { return user.email === newUser.email; }).length;
        if (duplicateUser) {
            return throwError({ error: { message: 'Email "' + newUser.username + '" já está cadastrado' } });
        }

        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        return of(new HttpResponse({ status: 200 }));
      }

      return next.handle(request);
      
    }))
    
  }
}

export let BackendProvider = {
  
  provide: HTTP_INTERCEPTORS,
  useClass: BackendInterceptor,
  multi: true
}
