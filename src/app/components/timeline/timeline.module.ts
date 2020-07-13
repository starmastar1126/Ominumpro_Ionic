import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TimelinePage} from './timeline.page';

const routes: Routes = [
    {
        path: '',
        component: TimelinePage
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
        TimelinePage
    ],
    declarations: [
        TimelinePage
    ],
    entryComponents: [
        TimelinePage
    ]
})
export class TimelinePageModule {
}
