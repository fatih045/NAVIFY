import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionpanelComponent } from './directionpanel.component';

describe('DirectionpanelComponent', () => {
  let component: DirectionpanelComponent;
  let fixture: ComponentFixture<DirectionpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectionpanelComponent]
    });
    fixture = TestBed.createComponent(DirectionpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
