import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: UserComponent,
    children: [
      { path: '', component: SignInComponent},
    ]
  },
  { path: 'signup', component: UserComponent,
    children: [
      { path: '', component: SignUpComponent},
    ]
  },
  { path: 'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
