import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterConditionsComponent } from './footer-conditions.component';

describe('FooterConditionsComponent', () => {
  let component: FooterConditionsComponent;
  let fixture: ComponentFixture<FooterConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
