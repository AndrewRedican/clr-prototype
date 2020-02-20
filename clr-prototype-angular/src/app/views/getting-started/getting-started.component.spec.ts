import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStarted } from './getting-started.component';

describe('GettingStartedComponent', () => {
  let component: GettingStarted;
  let fixture: ComponentFixture<GettingStarted>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GettingStarted]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStarted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
