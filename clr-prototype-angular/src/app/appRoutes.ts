import { Routes } from '@angular/router';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: GettingStartedComponent
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'new-layout',
    loadChildren: () => import('./views/new-layout/new-layout.module').then(m => m.NewLayoutModule)
  }
];

