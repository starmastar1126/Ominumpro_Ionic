import {Component, OnDestroy, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language/language.service';
import {Router} from '@angular/router';
import {Events, NavController} from '@ionic/angular';
import {UserInterfaceService} from '../../services/user-interface/user-interface.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, OnDestroy {

    pages: string[];
    page: string;
    pageScrolled: boolean;
    level: number;
    surveryCount: number;
    surveryCountWeekly: number;
    surveryCountMonthly: number;
    constructor(
        private router: Router,
        private events: Events,
        private navController: NavController,
        private language: LanguageService,
        private ui: UserInterfaceService,
    ) {
        this.events.subscribe('page-scrolled', () => {
            this.pageScrolled = true;
        });

        this.events.subscribe('page-not-scrolled', () => {
            this.pageScrolled = false;
        });

        this.events.subscribe('navigate-forward-url', (data) => {
            this.navigatePage(data);
        });
        this.events.subscribe('weeklyNotificationCount', (data) => {
            this.surveryCountWeekly = JSON.parse(localStorage.getItem('weeklyNotificationCount'));
            this.surveryCount = this.surveryCountWeekly + this.surveryCountMonthly;
        });
        this.events.subscribe('monthlyNotificationCount', (data) => {
            this.surveryCountMonthly = JSON.parse(localStorage.getItem('monthlyNotificationCount'));
            this.surveryCount = this.surveryCountWeekly + this.surveryCountMonthly;
        });
    }

    async ngOnInit() {
        this.level = JSON.parse(localStorage.getItem('level'));
        this.surveryCountWeekly = await JSON.parse(localStorage.getItem('weeklyNotificationCount'));
        this.surveryCountMonthly = await JSON.parse(localStorage.getItem('monthlyNotificationCount'));
        this.surveryCount = this.surveryCountWeekly + this.surveryCountMonthly;
        this.pages = ['main', 'surveys', 'coaching', 'micro-learning', 'tools', 'contacts', 'profile',
            'prepare-survey', 'prepare-coaching', 'video-summary', 'mindful-select', 'breathing-select'];
        this.page = this.router.url.split('/tabs/')[1];
        this.pageScrolled = false;
    }

    ngOnDestroy(): void {
        this.events.unsubscribe('page-scrolled');
        this.events.unsubscribe('page-not-scrolled');
        this.events.unsubscribe('navigate-forward-url');
    }

    navigatePage(page: string) {
        this.ui.showHeaderTopBar();
        if (this.pages.indexOf(page) > this.pages.indexOf(this.page)) {
            this.navController.navigateForward('/tabs/' + page).then(() => {
            });
        } else {
            this.navController.navigateBack('/tabs/' + page).then(() => {
            });
        }
        this.page = page;
    }

    async navigateToSurvey(id){
        if(id === '2'){
            await localStorage.setItem('weeklyNotificationCount', '0');
            this.events.publish('weeklyNotificationCount');
        } else if(id === '0'){
            await localStorage.setItem('monthlyNotificationCount', '0');
            this.events.publish('monthlyNotificationCount');
        }
        localStorage.setItem('surveyType', id);
        this.navController.navigateForward('/tabs/prepare-survey').then(() => {});
    }

    toggleSideMenu() {
        this.events.publish('toggle-side-menu');
    }

    navigateToBack(){
        this.navController.back();
    }
}
