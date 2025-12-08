import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './component/auth-form/auth-form.component';
import { UserListComponent } from './pages/user-list/user-list.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthFormComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
