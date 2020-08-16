import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService} from 'src/app/service/usuario.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'teste-informata';

  constructor(private router:Router, private usuarioService: UsuarioService){}
  
  isLoggedIn(){
    return this.usuarioService.isLoggedIn();

  }

  async logout(){
    await this.usuarioService.logout();
    await this.router.navigate(["/login"]);
  }


  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
  }
}
