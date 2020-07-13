import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingReviewQuestionPage } from './coaching-review-question.page';

describe('CoachingReviewQuestionPage', () => {
  let component: CoachingReviewQuestionPage;
  let fixture: ComponentFixture<CoachingReviewQuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachingReviewQuestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingReviewQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
