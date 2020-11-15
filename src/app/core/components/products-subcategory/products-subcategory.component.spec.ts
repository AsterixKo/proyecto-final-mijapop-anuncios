import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSubcategoryComponent } from './products-subcategory.component';

describe('ProductsSubcategoryComponent', () => {
  let component: ProductsSubcategoryComponent;
  let fixture: ComponentFixture<ProductsSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
