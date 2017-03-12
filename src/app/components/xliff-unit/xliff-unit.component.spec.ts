/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XliffUnitComponent } from './xliff-unit.component';

describe('XliffUnitComponent', () => {
  let component: XliffUnitComponent;
  let fixture: ComponentFixture<XliffUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XliffUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XliffUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
