import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureTripComponent } from './configure-trip.component';

describe('ConfigureTripComponent', () => {
  let component: ConfigureTripComponent;
  let fixture: ComponentFixture<ConfigureTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigureTripComponent]
    });
    fixture = TestBed.createComponent(ConfigureTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
