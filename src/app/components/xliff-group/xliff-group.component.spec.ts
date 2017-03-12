/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XliffGroupComponent } from './xliff-group.component';

describe('XliffGroupComponent', () => {
  let component: XliffGroupComponent;
  let fixture: ComponentFixture<XliffGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XliffGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XliffGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
