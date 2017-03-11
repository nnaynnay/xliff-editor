/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XliffViewerComponent } from './xliff-viewer.component';

describe('XliffViewerComponent', () => {
  let component: XliffViewerComponent;
  let fixture: ComponentFixture<XliffViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XliffViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XliffViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
