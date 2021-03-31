import { User } from './../../auth/user.model';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User
  jsonCurrentUser: any
  

  constructor(private authService: AuthService, private router: Router) {
    if (this.isAuthenticated()) {
      this.jsonCurrentUser = localStorage.getItem('currentUser')
      console.log(this.jsonCurrentUser)
      if (this.jsonCurrentUser)
      this.currentUser = JSON.parse(this.jsonCurrentUser)
    }
   }

  ngOnInit(): void {

  }

  exit() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  isAuthenticated() {
    return (localStorage.getItem('currentUser') !== null?true:false)
  }


}
