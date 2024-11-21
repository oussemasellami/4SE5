import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnnanceComponent } from './list-annance.component';

describe('ListAnnanceComponent', () => {
  let component: ListAnnanceComponent;
  let fixture: ComponentFixture<ListAnnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnnanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
