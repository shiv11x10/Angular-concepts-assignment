import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LoginService } from '../login.service';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it("should set the header username after input", ()=> {
    let service = TestBed.inject(LoginService);
    service.setName("Shivam");
    component.ngOnInit();
    fixture.detectChanges();

    let ele = fixture.debugElement.query(By.css('h3')).nativeElement; //check if username is rendered in html
    expect(ele.textContent).toEqual("Welcome " + component.username);

    expect(service.getName()).toEqual(component.username); //if service username and component username are same

  });
});
