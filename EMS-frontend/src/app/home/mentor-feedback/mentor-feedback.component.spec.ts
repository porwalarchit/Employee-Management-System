import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorFeedbackComponent } from './mentor-feedback.component';

describe('MentorFeedbackComponent', () => {
  let component: MentorFeedbackComponent;
  let fixture: ComponentFixture<MentorFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
