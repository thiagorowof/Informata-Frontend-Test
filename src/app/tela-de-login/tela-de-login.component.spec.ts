import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeLoginComponent } from './tela-de-login.component';

describe('TelaDeLoginComponent', () => {
  let component: TelaDeLoginComponent;
  let fixture: ComponentFixture<TelaDeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
