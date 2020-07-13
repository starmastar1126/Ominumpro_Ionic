import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonQuizPage } from './lesson-quiz.page';

describe('LessonQuizPage', () => {
  let component: LessonQuizPage;
  let fixture: ComponentFixture<LessonQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
