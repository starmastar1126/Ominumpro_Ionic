import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from "../services/auth/auth.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then(m => m.LanguagePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'survey-question',
    loadChildren: () => import('./pages/survey-question/survey-question.module').then(m => m.SurveyQuestionPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'survey-score',
    loadChildren: () => import('./pages/survey-score/survey-score.module').then(m => m.SurveyScorePageModule),
    canActivate: [AuthService]
  },
  {
    path: 'coaching-question',
    loadChildren: () => import('./pages/coaching-question/coaching-question.module').then(m => m.CoachingQuestionPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'coaching-review-question',
    loadChildren: () => import('./pages/coaching-review-question/coaching-review-question.module').then(m => m.CoachingReviewQuestionPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'coaching-review',
    loadChildren: () => import('./pages/coaching-review/coaching-review.module').then(m => m.CoachingReviewPageModule),
    canActivate: [AuthService]
  },
  { path: 'mindful-exercise', loadChildren: './modals/mindful-exercise/mindful-exercise.module#MindfulExercisePageModule' },
  { path: 'call-modal', loadChildren: './modals/call-modal/call-modal.module#CallModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
