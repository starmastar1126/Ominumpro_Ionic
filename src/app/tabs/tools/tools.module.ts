import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolsPage } from './tools.page';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

const routes: Routes = [
  {
    path: '',
    component: ToolsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToolsPage],
  providers: [
    NativeAudio
  ]
})
export class ToolsPageModule {}
