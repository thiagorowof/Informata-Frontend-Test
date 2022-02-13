import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { TelaLoginComponent } from './tela-login/tela-login.component';

@NgModule({
  declarations: [
    TelaLoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    ButtonModule        
  ],
  providers: [
    MessageService
  ]  
})
export class LoginModule { }
