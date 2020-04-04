import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {DbHelperComponent} from '../db-helper/db-helper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ObjectInfoComponent} from '../object-info/object-info.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomePageComponent,
    DbHelperComponent,
    ObjectInfoComponent
  ],
  exports: [HomePageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
