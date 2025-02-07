/**
* Generated by JitBlox - rapid interactive prototyping of modern web apps from your browser.
* Upgrade to a Pro plan to remove this header, see https://www.jitblox.com/plans for more.
* 
* Check out this JitBlox project, Quick start tutorial (final), at
* https://www.jitblox.com/project/VymqwxT3SC/quick-start-tutorial-final
*/

import { Routes } from '@angular/router';
import { AboutComponent } from './components/Pages/about.component';
import { DestinationsComponent } from './components/Pages/destinations.component';
import { HomeComponent } from './components/Pages/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'destinations',
    component: DestinationsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
