import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSignupComponent } from './reactive-signup.component';
import { element } from 'protractor';

describe('ReactiveSignupComponent', () => {
  let component: ReactiveSignupComponent;
  let fixture: ComponentFixture<ReactiveSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ReactiveSignupComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Valid Email', () => {
    let email = component.signupform.controls.email;
    email.setValue('shivam@gmail');
    expect(email.valid).toBeTruthy();
  });
});
