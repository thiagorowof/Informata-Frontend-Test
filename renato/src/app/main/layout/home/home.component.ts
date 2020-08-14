import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { ResponseAuthModel } from '../../../shared/models/response-auth.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  actualUser: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.actualUser = this.authService.currentUser.user.name;
  }

  logout(): void {
    this.authService.logout();
  }
}
