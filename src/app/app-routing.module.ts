import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExampleComponent } from './components/example/example.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'example', pathMatch: 'full' },
      { path: 'example', component: ExampleComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UserComponent,  },
      { path: 'user/:id', component: UserComponent,  },
    ]
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
