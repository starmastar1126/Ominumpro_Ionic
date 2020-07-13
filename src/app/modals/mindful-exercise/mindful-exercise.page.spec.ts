import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfulExercisePage } from './mindful-exercise.page';

describe('MindfulExercisePage', () => {
  let component: MindfulExercisePage;
  let fixture: ComponentFixture<MindfulExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindfulExercisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindfulExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
