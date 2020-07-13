import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CoachingPage} from './coaching.page';
import {TimelinePage} from '../../components/timeline/timeline.page';
import {IonicRatingModule} from 'ionic-rating';

const routes: Routes = [
    {
        path: '',
        component: CoachingPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        IonicRatingModule,
    ],
    declarations: [
        CoachingPage,
        TimelinePage
    ]
})
export class CoachingPageModule {
}
