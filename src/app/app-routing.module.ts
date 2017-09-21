import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PageCreateComponent} from './page-create/page-create.component';
import {PageDetailComponent} from './page-detail/page-detail.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'page/:id', component: PageDetailComponent },
    { path: 'create', component: PageCreateComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/dashboard'}
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
