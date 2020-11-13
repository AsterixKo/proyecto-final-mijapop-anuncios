import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductsMarketComponent } from './my-products-market.component';

describe('MyProductsMarketComponent', () => {
  let component: MyProductsMarketComponent;
  let fixture: ComponentFixture<MyProductsMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductsMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductsMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
