import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnanceRoutingModule } from './annance-routing.module';
import { ListAnnanceComponent } from './list-annance/list-annance.component';
import { AnnanceComponent } from './annance.component';



@NgModule({
  declarations: [
    AnnanceComponent,
    ListAnnanceComponent
  ],
  imports: [
    CommonModule,
    AnnanceRoutingModule
  ]
})
export class AnnanceModule { }
