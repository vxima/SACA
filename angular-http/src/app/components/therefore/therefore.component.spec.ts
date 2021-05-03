import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThereforeComponent } from './therefore.component';

describe('ThereforeComponent', () => {
  let component: ThereforeComponent;
  let fixture: ComponentFixture<ThereforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThereforeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThereforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
