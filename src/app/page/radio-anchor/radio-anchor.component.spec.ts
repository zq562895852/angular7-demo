import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioAnchorComponent } from './radio-anchor.component';

describe('RadioAnchorComponent', () => {
  let component: RadioAnchorComponent;
  let fixture: ComponentFixture<RadioAnchorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioAnchorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
