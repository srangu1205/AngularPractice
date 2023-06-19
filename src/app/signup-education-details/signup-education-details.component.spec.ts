import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEducationDetailsComponent } from './signup-education-details.component';

describe('SignupEducationDetailsComponent', () => {
  let component: SignupEducationDetailsComponent;
  let fixture: ComponentFixture<SignupEducationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupEducationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupEducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
