import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsPrerequisiteComponent } from './goals-prerequisite.component';

describe('GoalsPrerequisiteComponent', () => {
  let component: GoalsPrerequisiteComponent;
  let fixture: ComponentFixture<GoalsPrerequisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsPrerequisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsPrerequisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
