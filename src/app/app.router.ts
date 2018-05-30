import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TowerComponent} from './tower/tower.component';
import {FloorComponent} from './floor/floor.component';

/**
 * All routes go towards Wrapper that prepares the stage for vr modules
 * to be loaded. With route we provide also an ID of the selected module.
 */
export const APP_ROUTES: Routes = [
  { path: '',
    redirectTo: '/city',
    pathMatch: 'full'
  },
  {
    path: 'city',
    component: HomePageComponent,
    // data: { title: 'Heroes List' }
  },
  { path: 'tower/:id',      component: TowerComponent },
  { path: 'floor/:id',      component: FloorComponent },
  { path: '**', component: PageNotFoundComponent }
];
