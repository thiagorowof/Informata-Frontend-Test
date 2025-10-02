import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClienteService} from '../service/cliente.service';
import { Cliente } from 'src/app/shared/models/cliente';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css'],
  providers: [MessageService]
})
export class CadastroClienteComponent implements OnInit {  
  public data!: Cliente;

  constructor( 
    private messageService: MessageService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.data = new Cliente();
  }

  public salvar(form: NgForm){    
    this.messageService.clear;
    if (form.valid) {
      this.clienteService.salvar(this.data);
      this.messageService.add({
        severity:'success',
        summary:'Informação',
        detail:'Cliente cadastrado com sucesso!'});
    } else {
      this.messageService.add({
        severity:'error',
        summary:'Erro',
        detail:'Preencha os campos obrigatórios (*)!'});
    }
  } 
}
