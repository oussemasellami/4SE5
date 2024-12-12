import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormresidenceComponent } from './formresidence/formresidence.component';
import { UpdateComponent } from './update/update.component';
import { UpdatenewComponent } from './updatenew/updatenew.component';
import { DetailsComponent } from './details/details.component';

const routes:Routes=[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'residences',component:ResidencesComponent},
  {path:'news',component:NewsComponent},
  {path:'newresidence',component:FormresidenceComponent},
  {path:'newss/:id',component:NewsComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'updatenew/:id',component:UpdatenewComponent},
  {path:'details/:id',component:DetailsComponent},

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
