import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackemailComponent } from './feedbackemail.component';

describe('FeedbackemailComponent', () => {
  let component: FeedbackemailComponent;
  let fixture: ComponentFixture<FeedbackemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
