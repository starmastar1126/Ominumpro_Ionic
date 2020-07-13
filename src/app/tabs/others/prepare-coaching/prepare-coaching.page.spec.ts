import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareCoachingPage } from './prepare-coaching.page';

describe('PrepareSurveyPage', () => {
  let component: PrepareCoachingPage;
  let fixture: ComponentFixture<PrepareCoachingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareCoachingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareCoachingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
