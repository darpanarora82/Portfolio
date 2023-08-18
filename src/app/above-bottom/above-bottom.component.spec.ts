import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveBottomComponent } from './above-bottom.component';

describe('AboveBottomComponent', () => {
  let component: AboveBottomComponent;
  let fixture: ComponentFixture<AboveBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboveBottomComponent]
    });
    fixture = TestBed.createComponent(AboveBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
