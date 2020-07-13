import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MindfulSelectPage } from './mindful-select.page';

const routes: Routes = [
  {
    path: '',
    component: MindfulSelectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MindfulSelectPage]
})
export class MindfulSelectPageModule {}
