import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

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
  // @todo: add Tower component to route
  // { path: 'tower/:id',      component: HeroDetailComponent },
  // @todo: add 404 component to route
  // { path: '**', component: PageNotFoundComponent }
];
