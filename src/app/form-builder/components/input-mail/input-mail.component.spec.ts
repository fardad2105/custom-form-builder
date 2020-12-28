/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputMailComponent } from './input-mail.component';

describe('InputMailComponent', () => {
  let component: InputMailComponent;
  let fixture: ComponentFixture<InputMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
