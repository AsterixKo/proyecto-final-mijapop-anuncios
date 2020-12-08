import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterJobsComponent } from './footer-jobs.component';

describe('FooterJobsComponent', () => {
  let component: FooterJobsComponent;
  let fixture: ComponentFixture<FooterJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
