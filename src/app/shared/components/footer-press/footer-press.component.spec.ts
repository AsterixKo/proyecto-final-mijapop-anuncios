import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPressComponent } from './footer-press.component';

describe('FooterPressComponent', () => {
  let component: FooterPressComponent;
  let fixture: ComponentFixture<FooterPressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
