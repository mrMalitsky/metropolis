import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import {HomePageComponent} from "./home-page.component";
import {AframePipeModule} from 'angular-aframe-pipe';

@NgModule({
  imports: [
    CommonModule,
    AframePipeModule,
    // HomePageRoutingModule
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
