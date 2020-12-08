import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTeamComponent } from './footer-team.component';

describe('FooterTeamComponent', () => {
  let component: FooterTeamComponent;
  let fixture: ComponentFixture<FooterTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
