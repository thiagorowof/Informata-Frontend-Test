import { Component } from '@angular/core';

import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: 'products.component.html' })
export class ProductsComponent {
  user: User;

  constructor(private authService: AuthService) {
    this.user = this.authService.userValue;
  }
}
