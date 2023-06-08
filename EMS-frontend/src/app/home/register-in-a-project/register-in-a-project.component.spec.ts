import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInAProjectComponent } from './register-in-a-project.component';

describe('RegisterInAProjectComponent', () => {
  let component: RegisterInAProjectComponent;
  let fixture: ComponentFixture<RegisterInAProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterInAProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterInAProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
