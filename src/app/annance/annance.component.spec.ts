import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnanceComponent } from './annance.component';

describe('AnnanceComponent', () => {
  let component: AnnanceComponent;
  let fixture: ComponentFixture<AnnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
