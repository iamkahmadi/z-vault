import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordListComponent } from './components/password-list/password-list.component';
import { PasswordDetailComponent } from './components/password-detail/password-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { LoggedInLayoutComponent } from './components/logged-in-layout/logged-in-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected routes
  {
    path: '',
    component: LoggedInLayoutComponent,
    canActivate: [authGuard],  // Guard for logged-in users
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'passwords', component: PasswordListComponent },
      { path: 'passwords/:id', component: PasswordDetailComponent },
    ]
  }
];
