import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesSectionComponent } from './routes-section.component';

describe('RoutesSectionComponent', () => {
  let component: RoutesSectionComponent;
  let fixture: ComponentFixture<RoutesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
