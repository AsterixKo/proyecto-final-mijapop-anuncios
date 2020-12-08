import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSecurityComponent } from './footer-security.component';

describe('FooterSecurityComponent', () => {
  let component: FooterSecurityComponent;
  let fixture: ComponentFixture<FooterSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
