 import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  adicionarCadastroForm: any;

  //adicionarCadastroForm: FormGroup;


  constructor(private formBulder: FormBuilder) {
    this.createForm();
   }

   createForm() {
     this.adicionarCadastroForm = this.formBulder.group({
        nomeUsusario: ['', Validators.required],
        email: ['', Validators.required,],
        telefone: ['', Validators.required,],
        nomeDaEmpresa: ['', Validators.required,],
        cnpj: ['', Validators.required,],
        senha: ['', Validators.required,]
     });
   }

  ngOnInit(): void {
  }

}


