import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoPlayerPage } from './video-player.page';

const routes: Routes = [
  {
    path: '',
    component: VideoPlayerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    VideoPlayerPage
  ],
  declarations: [
      VideoPlayerPage
  ],
  entryComponents: [
      VideoPlayerPage
  ]
})
export class VideoPlayerPageModule {}
