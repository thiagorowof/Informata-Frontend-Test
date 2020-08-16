import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { Usuario } from './usuario';

let fixture: ComponentFixture<LoginComponent>;


describe('Validar serviço de autenticação', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });


  it('Usuário e senha válidos', inject([AuthService], (service: AuthService) => {    
    
    let usuario = {
      nome: 'admin',
      senha: 'admin'
    }
    
    expect(usuario.nome).toBeTruthy();
    expect(usuario.senha).toBeTruthy();
  }));

  it('Usuário ou senha válido(s)', inject([AuthService], (service: AuthService) => {
    let usuario = {
      nome: 'admin',
      senha: 'admin'
    }
    expect(service.fazerLogin(usuario)).toBeFalsy();
  }));

});


describe('Verifica CSS`s', () => {
  it('Deve ter uma classe login-panel', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('.login-panel'));

    expect(el).toBeTruthy();
  })
});
