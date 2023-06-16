import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeReportComponent } from './add-employee-report.component';

describe('AddEmployeeReportComponent', () => {
  let component: AddEmployeeReportComponent;
  let fixture: ComponentFixture<AddEmployeeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
