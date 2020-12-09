import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductStatusComponent } from './add-product-status.component';

describe('AddProductStatusComponent', () => {
  let component: AddProductStatusComponent;
  let fixture: ComponentFixture<AddProductStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
