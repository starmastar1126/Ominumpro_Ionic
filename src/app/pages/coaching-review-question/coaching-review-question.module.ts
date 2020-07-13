import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoachingReviewQuestionPage } from './coaching-review-question.page';

const routes: Routes = [
  {
    path: '',
    component: CoachingReviewQuestionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachingReviewQuestionPage]
})
export class CoachingReviewQuestionPageModule {}
