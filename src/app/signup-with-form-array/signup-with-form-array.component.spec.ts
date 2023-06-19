import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWithFormArrayComponent } from './signup-with-form-array.component';

describe('SignupWithFormArrayComponent', () => {
  let component: SignupWithFormArrayComponent;
  let fixture: ComponentFixture<SignupWithFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupWithFormArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupWithFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
