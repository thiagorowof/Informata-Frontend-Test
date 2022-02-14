import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { LoginService } from '../service/login.service';
import { Cliente } from 'src/app/shared/models/cliente';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css'],
  providers: [MessageService]
})
export class TelaLoginComponent implements OnInit {
  public data!: Cliente;
  constructor( 
    private loginService: LoginService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.data = new Cliente();
  }

  public validar(form: NgForm): void {
    if (form.valid) {
      const existe = this.loginService.buscar(this.data.cpf);
      if (existe) {
        this.messageService.add({
          severity:'success',
          summary:'Informação',
          detail:'Usuário validado!'});
      } 
      else {
        this.messageService.add({
          severity:'error',
          summary:'Erro',
          detail:'Usuário não existe.'});
      }      
    }  
    else {
      this.messageService.add({
        severity:'error',
        summary:'Erro',
        detail:'Favor preeencher o campo CPF.'});
    }  
  }
}
