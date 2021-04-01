import { HeaderService } from './header.service';
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
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private headerService: HeaderService
    ) { }

  ngOnInit(): void {

  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  exit() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  isAuthenticated() {
    return (localStorage.getItem('currentUser') !== null?true:false)
  }


}
