import { Config } from 'protractor/built/config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PagesComponent } from './pages/pages.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { LoginComponent } from './login/login.component';

import { PageService } from './services/page.service';
import { ConfigService } from './services/config.service'; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PageCreateComponent,
    PagesComponent,
    PageDetailComponent,
    LoginComponent
  ],
  providers: [ 
    PageService,
    ConfigService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }