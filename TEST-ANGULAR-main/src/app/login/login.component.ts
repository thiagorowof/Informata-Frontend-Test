import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private FormBuilder: FormBuilder, private http : HttpClient, private Router : Router) { }

  ngOnInit(): void {

    this.loginForm = this.FormBuilder.group({

      Email:[''],
      Senha:[''],



    })

  }

  login(){

    this.http.get<any>('http://localhost:3000/cadastroUsers')
    .subscribe(res=>{

      const user = res.find((a:any)=>{
        return a.Email === this.loginForm.value.Email && a.Senha === this.loginForm.value.Senha
      })

      if(user){
        this.loginForm.reset()
        this.Router.navigate(['produtos'])
      } else{
        alert("Email ou senha incorretos. Preencha os campos indicados.")
      }

    }, err=>{
      alert("Desculpe! Algo deu errado.")
    })



  }

}
