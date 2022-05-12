import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintManagerComponent } from './constraint-manager.component';

describe('ConstraintManagerComponent', () => {
  let component: ConstraintManagerComponent;
  let fixture: ComponentFixture<ConstraintManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstraintManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstraintManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
