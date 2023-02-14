import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimphonisInputIntervalComponent } from './simphonis-input-interval.component';

describe('SimphonisInputIntervalComponent', () => {
  let component: SimphonisInputIntervalComponent;
  let fixture: ComponentFixture<SimphonisInputIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimphonisInputIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimphonisInputIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
