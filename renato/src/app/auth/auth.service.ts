import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CredentialsLoginModel } from '../shared/models/credentials-login.model';
import { ResponseAuthModel } from '../shared/models/response-auth.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const STORAGE_KEY = 'currentUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<ResponseAuthModel>;
  private logoutSubject: Subject<any>;

  constructor(private http: HttpClient, private router: Router) {
    const savedUser = JSON.parse(localStorage.getItem(STORAGE_KEY));
    this.currentUserSubject = new BehaviorSubject<ResponseAuthModel>(savedUser);
    this.logoutSubject = new Subject<any>();
  }

  login(credentials: CredentialsLoginModel): Observable<ResponseAuthModel> {
    if (
      credentials.cpf === '11111111111' &&
      credentials.password === '123456'
    ) {
      return of({
        token: 'adsfgzdfhsdghwdfbsdgfhsdgfnbsdhnv',
        user: {
          name: 'Renato Valentim',
          email: 'renato@renato.com',
        },
      }).pipe(tap((user: ResponseAuthModel) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        this.currentUserSubject.next(user);
      }));
    }
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.currentUserSubject.next(null);
    this.logoutSubject.next(null);
    this.router.navigate(['/login']);
  }

  get token(): string {
    const savedUser = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!savedUser) {
      return null;
    }
  }

  get currentUser(): ResponseAuthModel {
    return this.currentUserSubject.value;
  }

  get currentUser$(): Observable<ResponseAuthModel> {
    return this.currentUserSubject.asObservable();
  }

  get isUserLogged(): boolean {
    return this.currentUser != null;
  }

  get isUserLogged$(): Observable<boolean> {
    return this.currentUser$.pipe(map(((user: ResponseAuthModel) => user != null)));
  }

  get logout$(): Observable<any> {
    return this.logoutSubject.asObservable();
  }


}
