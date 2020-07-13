import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingPage } from './coaching.page';

describe('CoachingPage', () => {
  let component: CoachingPage;
  let fixture: ComponentFixture<CoachingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
