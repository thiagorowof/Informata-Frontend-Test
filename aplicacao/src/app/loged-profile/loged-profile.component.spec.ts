import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedProfileComponent } from './loged-profile.component';

describe('LogedProfileComponent', () => {
  let component: LogedProfileComponent;
  let fixture: ComponentFixture<LogedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
