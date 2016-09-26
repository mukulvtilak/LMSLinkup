// angular
import { Routes } from '@angular/router';

// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { AppRoutes } from './app/app.routes';

export const routes: Routes = [
  //...HomeRoutes,
  ...AppRoutes,
  ...AboutRoutes,
  ...AppRoutes,
  ...DashboardRoutes
];
