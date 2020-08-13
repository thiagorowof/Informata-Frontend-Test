import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProductsComponent } from './register-products.component';

describe('RegisterProductsComponent', () => {
  let component: RegisterProductsComponent;
  let fixture: ComponentFixture<RegisterProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
