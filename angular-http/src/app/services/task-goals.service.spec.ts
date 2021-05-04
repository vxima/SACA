import { TestBed } from '@angular/core/testing';

import { TaskGoalsService } from './task-goals.service';

describe('TaskGoalsService', () => {
  let service: TaskGoalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskGoalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
