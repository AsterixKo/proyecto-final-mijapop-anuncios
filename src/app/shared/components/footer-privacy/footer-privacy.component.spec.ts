import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrivacyComponent } from './footer-privacy.component';

describe('FooterPrivacyComponent', () => {
  let component: FooterPrivacyComponent;
  let fixture: ComponentFixture<FooterPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
