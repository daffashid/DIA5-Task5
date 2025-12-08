import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AuthFormComponent } from '../auth/component/auth-form/auth-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';


@NgModule({
  declarations: [
    HomepageComponent,
    UserListComponent,
    AuthFormComponent,
    HomeComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
