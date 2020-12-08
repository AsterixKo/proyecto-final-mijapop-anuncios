import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWhoComponent } from './footer-who.component';

describe('FooterWhoComponent', () => {
  let component: FooterWhoComponent;
  let fixture: ComponentFixture<FooterWhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
