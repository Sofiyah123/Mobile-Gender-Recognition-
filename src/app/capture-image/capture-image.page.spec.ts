import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureImagePage } from './capture-image.page';

describe('CaptureImagePage', () => {
  let component: CaptureImagePage;
  let fixture: ComponentFixture<CaptureImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
