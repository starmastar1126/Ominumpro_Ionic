import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathingExercisePage } from './breathing-exercise.page';

describe('BreathingExercisePage', () => {
  let component: BreathingExercisePage;
  let fixture: ComponentFixture<BreathingExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreathingExercisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathingExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
