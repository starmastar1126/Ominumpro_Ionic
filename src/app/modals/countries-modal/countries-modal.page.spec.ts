import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesModalPage } from './countries-modal.page';

describe('CountriesModalPage', () => {
  let component: CountriesModalPage;
  let fixture: ComponentFixture<CountriesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
