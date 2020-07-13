import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BreathingSelectPage } from './breathing-select.page';

const routes: Routes = [
  {
    path: '',
    component: BreathingSelectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BreathingSelectPage]
})
export class BreathingSelectPageModule {}
