import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastroForm !: FormGroup;
  constructor(private FormBuilder: FormBuilder, private http : HttpClient, private Router : Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.FormBuilder.group({

      Nome:[''],
      Email:[''],
      Senha:['']

    })
  }

  cadastrar(){

    this.http.post<any>('http://localhost:3000/cadastroUsers', this.cadastroForm.value)
    .subscribe(res => {
      alert("Cadastro realizado com sucesso.")
      this.cadastroForm.reset()
      this.Router.navigate(['login'])
    }, err=>{
      alert("Erro ao realizar Cadastro.")
    })


  }

}
