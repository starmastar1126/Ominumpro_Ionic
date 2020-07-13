import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSummaryPage } from './video-summary.page';

describe('VideoSummaryPage', () => {
  let component: VideoSummaryPage;
  let fixture: ComponentFixture<VideoSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
