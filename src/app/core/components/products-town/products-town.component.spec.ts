import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTownComponent } from './products-town.component';

describe('ProductsTownComponent', () => {
  let component: ProductsTownComponent;
  let fixture: ComponentFixture<ProductsTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
