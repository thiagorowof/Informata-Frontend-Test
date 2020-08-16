import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  states: SelectItem[];

  cadastroForm: FormGroup;

  constructor(private rota: Router, private mensagemService: MessageService) {
    this.states = [
      { label: 'Selecione o Estado', value: null },
      { label: 'Pernambuco', value: { id: 1, name: 'Pernambuco', code: 'PE' } },
      {
        label: 'Espírito Santo',
        value: { id: 2, name: 'Espírito Santo', code: 'ES' },
      },
      { label: 'São Paulo', value: { id: 3, name: 'São Paulo', code: 'SP' } },
      { label: 'Ceará', value: { id: 4, name: 'Ceará', code: 'CE' } },
      { label: 'Bahia', value: { id: 5, name: 'Bahia', code: 'BA' } },
    ];

    this.cadastroForm = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(2),
      ]),
      sobrenome: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(2),
      ]),
      endereco: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
        Validators.minLength(5),
      ]),
      cidade: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(2),
      ]),
      estado: new FormControl('', [Validators.required]),
      cep: new FormControl('', [
        Validators.required,
        Validators.maxLength(9),
        Validators.minLength(8),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
        Validators.minLength(10),
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit(): void {}

  cadastrarUsuario() {
    const novoUsuario = this.cadastroForm.value;
    if (!this.verificarCadastro(novoUsuario.email)) {
      localStorage.setItem(novoUsuario.email, JSON.stringify(novoUsuario));

      this.mensagemService.add({
        severity: 'success',
        summary: 'Sucesso!',
        detail: 'Cadastro realizado',
      });

      setTimeout(() => {
        this.rota.navigate(['']);
      }, 2000);
    } else {
      this.mensagemService.add({
        severity: 'warn',
        summary: 'Atenção!',
        detail: 'O e-mail já existe',
      });
    }
  }



  verificarCadastro(email) {
    return localStorage.getItem(email) != undefined;
  }
}
