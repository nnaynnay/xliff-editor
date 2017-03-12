/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XliffFileComponent } from './xliff-file.component';

describe('XliffFileComponent', () => {
  let component: XliffFileComponent;
  let fixture: ComponentFixture<XliffFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XliffFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XliffFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
