import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormresidenceComponent } from './formresidence.component';

describe('FormresidenceComponent', () => {
  let component: FormresidenceComponent;
  let fixture: ComponentFixture<FormresidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormresidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
