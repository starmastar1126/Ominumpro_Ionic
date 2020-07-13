import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoSummaryPage } from './video-summary.page';
import {VideoPlayerPage} from '../../../components/video-player/video-player.page';
import { MomentModule } from 'ngx-moment';

const routes: Routes = [
  {
    path: '',
    component: VideoSummaryPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MomentModule
    ],
  declarations: [
      VideoSummaryPage,
      VideoPlayerPage
  ]
})
export class VideoSummaryPageModule {}
