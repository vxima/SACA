import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentTasksComponent } from './dependent-tasks.component';

describe('DependentTasksComponent', () => {
  let component: DependentTasksComponent;
  let fixture: ComponentFixture<DependentTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependentTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
