import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPasswordComponent } from './sign-in-password.component';

describe('SignInPasswordComponent', () => {
  let component: SignInPasswordComponent;
  let fixture: ComponentFixture<SignInPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
