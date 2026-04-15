import { Routes } from '@angular/router';
import { AboutMe } from '../pages/about-me/about-me';
import { Projects } from '../pages/projects/projects';
import { Resume } from '../pages/resume/resume';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutMe
  },
  {
    path: 'resume',
    component: Resume
  },
  {
    path: 'projects',
    component: Projects
  }
];
