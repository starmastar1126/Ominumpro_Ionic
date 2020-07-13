import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysPage } from './surveys.page';

describe('SurveysPage', () => {
  let component: SurveysPage;
  let fixture: ComponentFixture<SurveysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
