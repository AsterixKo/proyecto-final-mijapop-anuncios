import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductsSoldComponent } from './my-products-sold.component';

describe('MyProductsSoldComponent', () => {
  let component: MyProductsSoldComponent;
  let fixture: ComponentFixture<MyProductsSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductsSoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductsSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
