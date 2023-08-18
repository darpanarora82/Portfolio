import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyTopComponent } from './main-body-top.component';

describe('MainBodyTopComponent', () => {
  let component: MainBodyTopComponent;
  let fixture: ComponentFixture<MainBodyTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyTopComponent]
    });
    fixture = TestBed.createComponent(MainBodyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
