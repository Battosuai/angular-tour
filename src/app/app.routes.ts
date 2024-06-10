import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './AboutCOmponent/about.component';
import { UserComponent } from './UserComponent/user.component';

export const routes: Routes = [
  {
    path: 'user',
    title: 'User Page',
    component: UserComponent,
  },
  {
    path: 'about',
    title: 'About Us Page',
    component: AboutComponent,
  },
];
