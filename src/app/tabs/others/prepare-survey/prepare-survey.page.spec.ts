import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareSurveyPage } from './prepare-survey.page';

describe('PrepareSurveyPage', () => {
  let component: PrepareSurveyPage;
  let fixture: ComponentFixture<PrepareSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareSurveyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
