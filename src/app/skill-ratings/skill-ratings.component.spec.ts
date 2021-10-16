import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRatingsComponent } from './skill-ratings.component';

describe('SkillRatingsComponent', () => {
  let component: SkillRatingsComponent;
  let fixture: ComponentFixture<SkillRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
