import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRulesComponent } from './footer-rules.component';

describe('FooterRulesComponent', () => {
  let component: FooterRulesComponent;
  let fixture: ComponentFixture<FooterRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
