import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignMenteeComponent } from './assign-mentee.component';

describe('AssignMenteeComponent', () => {
  let component: AssignMenteeComponent;
  let fixture: ComponentFixture<AssignMenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignMenteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
