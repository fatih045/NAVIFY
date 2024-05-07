import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableDirectionsComponent } from './draggable-directions.component';

describe('DraggableDirectionsComponent', () => {
  let component: DraggableDirectionsComponent;
  let fixture: ComponentFixture<DraggableDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableDirectionsComponent]
    });
    fixture = TestBed.createComponent(DraggableDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
