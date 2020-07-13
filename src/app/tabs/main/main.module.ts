import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import {IonicRatingModule} from 'ionic-rating';
import {NgCircleProgressModule} from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgCircleProgressModule,
        IonicRatingModule
    ],
  declarations: [MainPage]
})
export class MainPageModule {}
