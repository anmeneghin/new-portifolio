import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('@app/about/about.component').then((mod) => mod.AboutComponent),
    data: { animation: 'AboutPage' },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('@app/projects/projects.component').then(
        (mod) => mod.ProjectsComponent
      ),
    data: { animation: 'ProjectsPage' },
  },
];
