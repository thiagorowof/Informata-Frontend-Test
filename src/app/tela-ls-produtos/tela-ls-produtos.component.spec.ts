import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLsProdutosComponent } from './tela-ls-produtos.component';

describe('TelaLsProdutosComponent', () => {
  let component: TelaLsProdutosComponent;
  let fixture: ComponentFixture<TelaLsProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaLsProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLsProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
