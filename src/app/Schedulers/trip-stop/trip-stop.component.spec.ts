import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripStopComponent } from './trip-stop.component';

describe('TripStopComponent', () => {
  let component: TripStopComponent;
  let fixture: ComponentFixture<TripStopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripStopComponent]
    });
    fixture = TestBed.createComponent(TripStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
