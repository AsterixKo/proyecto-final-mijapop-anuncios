import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCookiesComponent } from './footer-cookies.component';

describe('FooterCookiesComponent', () => {
  let component: FooterCookiesComponent;
  let fixture: ComponentFixture<FooterCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
