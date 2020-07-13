import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';
import {UserInterfaceService} from '../../../services/user-interface/user-interface.service';
import {Events, NavController} from '@ionic/angular';
import {UtilsService} from '../../../services/utils/utils.service';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

import { from } from 'rxjs';
@Component({
    selector: 'app-surveys',
    templateUrl: './surveys.page.html',
    styleUrls: ['./surveys.page.scss'],
})
export class SurveysPage {

    lastScore: number;
    surveryCountWeekly: number;
    surveryCountMonthly: number;
    constructor(
        private events: Events,
        private navController: NavController,
        private language: LanguageService,
        private ui: UserInterfaceService,
        private utils: UtilsService,
        private http: HttpClient,
    ) {
    }

    async ionViewWillEnter() {
        this.surveryCountWeekly = await JSON.parse(localStorage.getItem('weeklyNotificationCount'));
        this.surveryCountMonthly = await JSON.parse(localStorage.getItem('monthlyNotificationCount'));
        this.events.subscribe('weeklyNotificationCount', (data) => {
            this.surveryCountWeekly = JSON.parse(localStorage.getItem('weeklyNotificationCount'));
        });
        this.events.subscribe('monthlyNotificationCount', (data) => {
            this.surveryCountMonthly = JSON.parse(localStorage.getItem('monthlyNotificationCount'));
        });

        this.ui.pageContainerScrollToTop(document.getElementsByClassName('page-container')[0] as HTMLDivElement);
        this.lastScore = 0;
        await this.utils.showLoading().then(async (loading) => {
            await this.getSurveyScores().then(() => {
                loading.dismiss();
            });
        });
    }

    async getSurveyScores(): Promise<any> {
        return new Promise(resolve => {
            const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
            this.http.get(environment.surveyApi + 'last_score', {
                params: {...deviceInfo, type: 0}
            }).subscribe((lastScore: any) => {
                this.lastScore = Number(lastScore.score);
                    resolve({
                        lastScore: this.lastScore,
                    });
                });
            });
    }

    checkScroll(e) {
        if (this.ui.watchPageControllerScrolled(e.target)) {
            this.events.publish('page-not-scrolled');
        } else {
            this.events.publish('page-scrolled');
        }
    }

    async prepareSurvey(type: string) {
        localStorage.setItem('surveyType', type);
        if(type === '2'){
            await localStorage.setItem('weeklyNotificationCount', '0');
            this.events.publish('weeklyNotificationCount');
        } else if(type === '0'){
            await localStorage.setItem('monthlyNotificationCount', '0');
            this.events.publish('monthlyNotificationCount');
        }
        this.navController.navigateForward('/tabs/prepare-survey').then(() => {});
    }

}
