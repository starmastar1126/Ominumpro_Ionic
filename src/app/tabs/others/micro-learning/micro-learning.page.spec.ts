import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroLearningPage } from './micro-learning.page';

describe('MicroLearningPage', () => {
  let component: MicroLearningPage;
  let fixture: ComponentFixture<MicroLearningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroLearningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroLearningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
