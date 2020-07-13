import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalPage } from './user-modal.page';

describe('UserModalPage', () => {
  let component: UserModalPage;
  let fixture: ComponentFixture<UserModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
