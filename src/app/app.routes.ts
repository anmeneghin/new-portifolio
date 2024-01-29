import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@app/home/home.component').then((mod) => mod.HomeComponent),
    data: { animation: 'HomePage' },
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('@app/skills/skills.component').then((mod) => mod.SkillsComponent),
    data: { animation: 'SkillsPage' },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('@app/about/about.component').then((mod) => mod.AboutComponent),
    data: { animation: 'AboutPage' },
  },
];
