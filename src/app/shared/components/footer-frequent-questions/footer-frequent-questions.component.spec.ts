import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFrequentQuestionsComponent } from './footer-frequent-questions.component';

describe('FooterFrequentQuestionsComponent', () => {
  let component: FooterFrequentQuestionsComponent;
  let fixture: ComponentFixture<FooterFrequentQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFrequentQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFrequentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
