import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingReviewPage } from './coaching-review.page';

describe('CoachingReviewPage', () => {
  let component: CoachingReviewPage;
  let fixture: ComponentFixture<CoachingReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachingReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
