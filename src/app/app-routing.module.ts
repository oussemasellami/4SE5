import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormresidenceComponent } from './formresidence/formresidence.component';

const routes:Routes=[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'residences',component:ResidencesComponent},
  {path:'news',component:NewsComponent},
  {path:'newresidence',component:FormresidenceComponent},
  {path:'newss/:id',component:NewsComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
