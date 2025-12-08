import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { UserListComponent } from './pages/user-list/user-list.component';
import { HomeComponent } from './home.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

const routes: Routes = [
  {path:'', component: HomeComponent,
    children:[
      {path:'', component: HomepageComponent},
      { path: 'userlist', component: UserListComponent,canActivate: [AuthGuard]},
      {path:'userlist/:id', component: UserDetailComponent,canActivate:[AuthGuard]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
