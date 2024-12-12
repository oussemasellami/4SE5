import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnanceComponent } from './annance/annance.component';
import { ListAnnanceComponent } from './annance/list-annance/list-annance.component';
import { AnnanceModule } from './annance/annance.module';
import { FormresidenceComponent } from './formresidence/formresidence.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { UpdatenewComponent } from './updatenew/updatenew.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidencesComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    NotfoundComponent,
    FormresidenceComponent,
    UpdateComponent,
    UpdatenewComponent,
    DetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnanceModule,
    ReactiveFormsModule,
    HttpClientModule //import { HttpClientModule } from '@angular/common/http';
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
