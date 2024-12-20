/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FileFieldComponent } from './file-field.component';

describe('FileFieldComponent', () => {
  let component: FileFieldComponent;
  let fixture: ComponentFixture<FileFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
