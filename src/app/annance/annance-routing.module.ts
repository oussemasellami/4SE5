import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnanceComponent } from './annance.component';
import { ListAnnanceComponent } from './list-annance/list-annance.component';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes:Routes=[
  {path:'annance',component:AnnanceComponent,
    children:[
    {path:'list',component:ListAnnanceComponent}
    ]
  },
   {path:'**',component:NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AnnanceRoutingModule { }
