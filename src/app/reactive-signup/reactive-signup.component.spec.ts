import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSignupComponent } from './reactive-signup.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
