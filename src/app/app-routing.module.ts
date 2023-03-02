import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { NotLoggedGuard } from './core/guards/not-logged.guard';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [NotLoggedGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
        data: { title: 'login' },
      },
      { 
        path: 'login', 
        loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule) 
      }
    ],
  },
  { 
    path: 'home', 
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
