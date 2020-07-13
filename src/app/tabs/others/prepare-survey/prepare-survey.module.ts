import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrepareSurveyPage } from './prepare-survey.page';

const routes: Routes = [
  {
    path: '',
    component: PrepareSurveyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrepareSurveyPage]
})
export class PrepareSurveyPageModule {}
