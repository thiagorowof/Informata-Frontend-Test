import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.css']
})
export class TelaDeLoginComponent implements OnInit {

  public Formgroup!:FormGroup;


  constructor(
    public fb:FormBuilder,
    private router: Router,) 
    {
    
   }

   login(){
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser')!);
      console.log(registeredUser);
    
      if(localStorage.getItem('registeredUser') === null) 
        {
          window.alert("User não cadastrado")
         }
      else if(registeredUser.username === this.Formgroup.get('username')!.value && registeredUser.password === this.Formgroup.get('password')!.value) 
        {
        this.router.navigate(['/produtos']);
         }
      else {
        window.alert("*Atenção: Username ou Password inválidos!*")
    
          }
    
   }

  ngOnInit(): void {

    this.Formgroup = this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required], 
      
  })
  }
}
