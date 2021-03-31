import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`/users/authenticate`, { email: email, 
    password: password }).pipe(map(user => {
      
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user))
      }

      return user

    }))
  }

  logout() {
    localStorage.removeItem('currentUser')
  }

  register(user: User) {
    return this.http.post(`/users/register`, user);
  }
}
