import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {AuthService} from '../../services/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: () => import('./main/main.module').then(m => m.MainPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'surveys',
        children: [
          {
            path: '',
            loadChildren: () => import('./surveys/surveys.module').then(m => m.SurveysPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'coaching',
        children: [
          {
            path: '',
            loadChildren: () => import('./coaching/coaching.module').then(m => m.CoachingPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'coaching-question',
        loadChildren: () => import('../pages/coaching-question/coaching-question.module').then(m => m.CoachingQuestionPageModule),
        canActivate: [AuthService]
      },

      {
        path: 'micro-learning',
        children: [
          {
            path: '',
            loadChildren: () => import('./others/micro-learning/micro-learning.module').then(m => m.MicroLearningPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'tools',
        children: [
          {
            path: '',
            loadChildren: () => import('./tools/tools.module').then(m => m.ToolsPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
            canActivate: [AuthService]
          },
        ]
      },
      {
        path: 'prepare-survey',
        children: [
          {
            path: '',
            loadChildren: () => import('./others/prepare-survey/prepare-survey.module').then(m => m.PrepareSurveyPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'prepare-coaching',
        children: [
          {
            path: '',
            loadChildren: () => import('./others/prepare-coaching/prepare-coaching.module').then(m => m.PrepareCoachingPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'video-summary',
        children: [
          {
            path: '',
            loadChildren: () => import('./others/video-summary/video-summary.module').then(m => m.VideoSummaryPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'lesson-quiz',
        children: [
          {
            path: '',
            loadChildren: () => import('./others/lesson-quiz/lesson-quiz.module').then(m => m.LessonQuizPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      
      {
        path: 'breathing-select',
        children: [
          {
            path: '',
            loadChildren: () => import('./others/breathing-select/breathing-select.module').then(m => m.BreathingSelectPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'mindful-select',
        children: [
          {
            path: '',
            loadChildren: () => import('./others/mindful-select/mindful-select.module').then(m => m.MindfulSelectPageModule),
            canActivate: [AuthService]
          }
        ]
      },
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsPageModule),
            canActivate: [AuthService]
          }
        ]
      },
    ]
  },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
