import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductsComponent } from './display-products.component';
import { ProductDataService } from '../product-data.service';

fdescribe('DisplayProductsComponent', () => {
  let component: DisplayProductsComponent;
  let fixture: ComponentFixture<DisplayProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProductsComponent ],
      imports: [],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DisplayProductComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of products equal to ProductDataService', () => {
    // component.ngOnInit();  --> If getProducts was called in ngOnIt and not in constructor
    let dataservice = TestBed.inject(ProductDataService)  //access the product data service (only for root provider)
    expect(component.Products.length).toBe(dataservice.Products.length);
  });
});
