import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela-de-cadastro',
  templateUrl: './tela-de-cadastro.component.html',
  styleUrls: ['./tela-de-cadastro.component.css']
})
export class TelaDeCadastroComponent implements OnInit {
  
  public Formgroup!: FormGroup;
  


  constructor(
    public fb:FormBuilder,
    private router: Router,
      ) { 
  }

  register(){
      if(this.Formgroup.get('password')!.value !== this.Formgroup.get('rpassword')!.value) {
      window.alert("*Atenção: Certifique-se de que as senhas estão iguais!*");
      this.Formgroup.invalid
    } else {
        console.log(this.Formgroup.value)
        JSON.stringify(this.Formgroup.value)
        localStorage.setItem('registeredUser', JSON.stringify(this.Formgroup.value))
        this.Formgroup.get('password')!.value
        this.Formgroup.get('rpassword')!.value
        this.router.navigate(['/']);
        window.alert("*User cadastrado com sucesso!*")
      
    }
  
  
  }

  ngOnInit(): void {
    this.Formgroup = this.fb.group({
      name:["",Validators.required],
      username:["",Validators.required],
      password:["",Validators.required], 
      rpassword:["",Validators.required],
    })
    
  }
}

