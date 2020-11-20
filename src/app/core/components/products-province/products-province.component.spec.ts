import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsProvinceComponent } from './products-province.component';

describe('ProductsProvinceComponent', () => {
  let component: ProductsProvinceComponent;
  let fixture: ComponentFixture<ProductsProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
