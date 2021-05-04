import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDetailingComponent } from './children-detailing.component';

describe('ChildrenDetailingComponent', () => {
  let component: ChildrenDetailingComponent;
  let fixture: ComponentFixture<ChildrenDetailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenDetailingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenDetailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
