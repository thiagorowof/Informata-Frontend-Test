import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { AuthGuard } from './auth.guard'
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Component } from '@angular/core';
import { LoginComponent } from '../login.component'


describe('Validando se o usuário está autenticado', () => {

  let route: ActivatedRouteSnapshot;
  let 
  state: RouterStateSnapshot;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });

  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('Usuário está autenticado', inject([AuthGuard], (service: AuthGuard) => {
    localStorage.setItem('token', '123@qwe');
    expect(service.canActivate(route, state)).toBeTruthy();
  }));

  it('Usuário não está autenticado', inject([AuthGuard], (service: AuthGuard) => {
    expect(service.canActivate(route, state)).toBeFalsy();
  }));
});

