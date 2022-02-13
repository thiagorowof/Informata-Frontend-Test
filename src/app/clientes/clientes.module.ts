import { NgModule} from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
// import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


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
    ReactiveFormsModule
    
  ],
  
  providers: [
    MessageService
  ]
  
})
export class ClientesModule { }
