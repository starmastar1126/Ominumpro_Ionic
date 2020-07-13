import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { UserModalPage } from './user-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UserModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserModalPage],
  entryComponents: [UserModalPage,],
})
export class UserModalPageModule {}
