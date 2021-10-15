import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPortFolioComponent } from './personal-port-folio.component';

describe('PersonalPortFolioComponent', () => {
  let component: PersonalPortFolioComponent;
  let fixture: ComponentFixture<PersonalPortFolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalPortFolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPortFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
