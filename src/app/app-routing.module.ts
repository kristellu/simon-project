import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
/* import { CreditoempresarialComponent } from './components/admin/gestion/creditoempresarial/creditoempresarial.component';
 */
export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
      {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
 /*  {
    path: 'creditoemp',
    component: CreditoempresarialComponent
  }, */
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
