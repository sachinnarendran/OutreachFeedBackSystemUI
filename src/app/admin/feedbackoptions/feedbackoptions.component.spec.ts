import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackoptionsComponent } from './feedbackoptions.component';

 describe('FeedbackoptionsComponent', () => {
  let component: FeedbackoptionsComponent;
  let fixture: ComponentFixture<FeedbackoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
