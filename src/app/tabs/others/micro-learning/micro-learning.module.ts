import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Media } from '@ionic-native/media/ngx';

import { MicroLearningPage } from './micro-learning.page';

const routes: Routes = [
  {
    path: '',
    component: MicroLearningPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [Media],
  declarations: [MicroLearningPage]
})
export class MicroLearningPageModule { }
