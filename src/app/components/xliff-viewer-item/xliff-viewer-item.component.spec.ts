/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XliffViewerItemComponent } from './xliff-viewer-item.component';

describe('XliffViewerItemComponent', () => {
  let component: XliffViewerItemComponent;
  let fixture: ComponentFixture<XliffViewerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XliffViewerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XliffViewerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
