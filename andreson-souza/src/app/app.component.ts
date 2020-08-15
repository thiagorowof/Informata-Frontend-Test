import { Component } from '@angular/core';

import { AuthService } from './shared/services/auth.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor(private authService: AuthService) {
      this.authService.user.subscribe(x => this.user = x);
  }

  logout() {
      this.authService.logout();
  }
}
