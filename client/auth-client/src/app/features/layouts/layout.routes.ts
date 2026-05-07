import { Routes } from '@angular/router';
import { Dashboard } from '../dashboard/dashboard';
import { AdminOnly } from '../authorizeDemo/admin-only/admin-only';
import { AdminOrManager } from '../authorizeDemo/admin-or-manager/admin-or-manager';
import { SecurityAccess } from '../authorizeDemo/security-access/security-access';
import { ChangePassword } from '../authorizeDemo/change-password/change-password';
import { ActiveSessions } from '../authorizeDemo/active-sessions/active-sessions';
import { NotificationAccess } from '../authorizeDemo/notification-access/notification-access';
import { AccountSettings } from '../authorizeDemo/account-settings/account-settings';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'admin-only',
    component: AdminOnly,
  },
  {
    path: 'admin-or-manager',
    component: AdminOrManager,
  },
  {
    path: 'security-access',
    component: SecurityAccess,
  },
  {
    path: 'change-password',
    component: ChangePassword,
  },
  {
    path: 'active-sessions',
    component: ActiveSessions,
  },
  {
    path: 'notification-access',
    component: NotificationAccess,
  },
  {
    path: 'account-settings',
    component: AccountSettings,
  },
];
