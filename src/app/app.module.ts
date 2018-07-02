import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { APP_ROUTES } from './app.router';
import { MenuComponent } from './menu/menu.component';
import { AframePipe } from './shared/pipes/aframe.pipe';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TowerComponent } from './tower/tower.component';
import { FloorComponent } from './floor/floor.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment} from '../environments/environment';

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
    AngularFireDatabaseModule,

    HomePageModule,

    RouterModule.forRoot(
      APP_ROUTES,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
