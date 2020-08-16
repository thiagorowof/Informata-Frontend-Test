import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/model/usuario';
import { v1 as uuidv1 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = "http://localhost:4200";
  currentUser: Usuario;

  constructor(private http: HttpClient) { }

  async save(usuario: Usuario): Promise<Usuario> {
    if (usuario.userName == null) {
      throw Error("Invalid Username");
    }

    if (usuario.password == null) {
      throw Error("Invalid Password");
    }

    if (usuario.email == null) {
      throw Error("Invalid Email");
    }
    var users: Array<Usuario> = JSON.parse(localStorage.getItem('users'));

    if (users == null) {
      users = [];
    }
    if (users.some(user => user.email == usuario.email)) {
      throw Error("Email has already been registered");
    }


    usuario.id = uuidv1();
    users.push(usuario);
    localStorage.setItem('users', JSON.stringify(users));

    console.log("you have been registered");

    return Promise.resolve(usuario);
  }

  async login(email: string, password: string): Promise<Usuario> {

    var users: Array<Usuario> = JSON.parse(localStorage.getItem('users'));

    if (users == null) {
      throw Error("User not found");
    }
    var user = users.find(user => user.email == email && user.password == password)

    if (user == null) {
      throw Error("User not found");
    }

    this.currentUser = user;
    return Promise.resolve(user);
  }

  async logout(): Promise<void> {
    this.currentUser = null;

    return Promise.resolve();
  }

  isLoggedIn(): Boolean {
    return this.currentUser != null;
  }


  getAll(): Observable<any> {
    return this.http.get(this.baseUrl)

  }

}
