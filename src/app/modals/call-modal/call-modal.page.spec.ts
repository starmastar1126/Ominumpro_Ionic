import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallModalPage } from './call-modal.page';

describe('CallModalPage', () => {
  let component: CallModalPage;
  let fixture: ComponentFixture<CallModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
