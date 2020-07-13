import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrepareCoachingPage } from './prepare-coaching.page';

const routes: Routes = [
  {
    path: '',
    component: PrepareCoachingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrepareCoachingPage]
})
export class PrepareCoachingPageModule {}
