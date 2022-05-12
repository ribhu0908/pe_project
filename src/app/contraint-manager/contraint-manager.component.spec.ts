import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraintManagerComponent } from './contraint-manager.component';

describe('ContraintManagerComponent', () => {
  let component: ContraintManagerComponent;
  let fixture: ComponentFixture<ContraintManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraintManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraintManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
