import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPageComponent } from './bottom-page.component';

describe('BottomPageComponent', () => {
  let component: BottomPageComponent;
  let fixture: ComponentFixture<BottomPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomPageComponent]
    });
    fixture = TestBed.createComponent(BottomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
