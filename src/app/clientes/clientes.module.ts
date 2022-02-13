import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
// import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [  
    // CadastroClienteComponent 
    
  ],
  imports: [
    MessagesModule,
    MessageModule,
    MessageService,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ButtonModule
    
  ],
  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [
    MessageService
  ]

  
})
export class ClientesModule { }
