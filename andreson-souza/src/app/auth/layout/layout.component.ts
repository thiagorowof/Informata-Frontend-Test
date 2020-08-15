import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        if (this.authService.userValue) {
            this.router.navigate(['/']);
        }
    }
}
