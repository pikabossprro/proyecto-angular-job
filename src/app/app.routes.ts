import { Route } from '@angular/router';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'pages/index',
    pathMatch: 'full'
  },
  
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/page/pages.routes').then((m) => m.PAGE_ROUTE),
      }
    ]
  
