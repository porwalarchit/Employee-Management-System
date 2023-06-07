import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserdataComponent } from './update-userdata.component';

describe('UpdateUserdataComponent', () => {
  let component: UpdateUserdataComponent;
  let fixture: ComponentFixture<UpdateUserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
