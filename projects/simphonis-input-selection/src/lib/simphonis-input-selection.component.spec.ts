import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimphonisInputSelectionComponent } from './simphonis-input-selection.component';

describe('SimphonisInputSelectionComponent', () => {
  let component: SimphonisInputSelectionComponent;
  let fixture: ComponentFixture<SimphonisInputSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimphonisInputSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimphonisInputSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
