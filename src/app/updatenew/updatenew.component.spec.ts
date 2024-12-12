import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenewComponent } from './updatenew.component';

describe('UpdatenewComponent', () => {
  let component: UpdatenewComponent;
  let fixture: ComponentFixture<UpdatenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatenewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
