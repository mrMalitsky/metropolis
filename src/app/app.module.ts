import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { APP_ROUTES } from './app.router';
// Angular FireBase 2
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
// Modules
import { HomePageModule } from './home-page/home-page.module';
// Pipes
import { AframePipe } from './shared/pipes/aframe.pipe';
// Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { TowerComponent } from './tower/tower.component';
import { FloorComponent } from './floor/floor.component';
import {TowersService} from './shared/services/towers/towers.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TooltipComponent} from './shared/a-frame-components/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AframePipe,
    AboutComponent,
    PageNotFoundComponent,
    TowerComponent,
    FloorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // Fire base
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,

    HomePageModule,

    RouterModule.forRoot(
      APP_ROUTES,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TowersService, TooltipComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
