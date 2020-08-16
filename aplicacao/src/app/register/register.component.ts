import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private userService: UsersService) {

  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      usuario: new FormControl(null, Validators.minLength(8)),
      senha: new FormControl(null)
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.salvarUsuario(this.registerForm.value);

    } else {
      alert('corrige essa porra filho da puta')
    }

  }
}
