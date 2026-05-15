import { Routes } from '@angular/router';
import { User } from './features/user/user';

import { routes as userRoutes } from './features/user/user.routes';
import { routes as layoutRoutes } from './features/layouts/layout.routes';

import { MainLayout } from './features/layouts/main-layout/main-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: '', component: User, children: userRoutes },
  { path: '', component: MainLayout, children:layoutRoutes },
];
