import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('AppComponent', () => {  //using fdescribe will run only this test suit not others
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app component instance', () => {
    const fixture = TestBed.createComponent(AppComponent);
    //fixure is a wrapper ---> 1. component's instance  2. component's view
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as property title with value 'ecommerce'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;  //access to component reference
    expect(app.title).toEqual('ecommerce');  //string equality
  });

  it('should render title in an <h1> in the view', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // tell the TestBed to perform data binding by calling fixture.detectChanges(). Only then does the <h1> have the expected title.
    const compiled = fixture.nativeElement;  //access the view reference
    expect(compiled.querySelector('h1').textContent).toContain('Hello ecommerce');
  });
});
