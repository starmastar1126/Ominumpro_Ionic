import { Component, OnInit } from '@angular/core';
import {Events, LoadingController, ModalController, NavController} from '@ionic/angular';
import {LanguageService} from '../../../services/language/language.service';
import {UserInterfaceService} from '../../../services/user-interface/user-interface.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Calendar, CalendarDay, CanvasRect, CoachingReview, Rect, Time, CoachingSession, UserProfile} from '../../../interface/interface';
import {UtilsService} from '../../../services/utils/utils.service';
import {CallModalPage} from '../../modals/call-modal/call-modal.page';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

    timelineData: any[];
    sessionScheduleOpened: boolean;
    sessionGuideOpened: boolean;
    sessions: UserProfile[];
    currentDate: string;
    calendar: Calendar;
    selectedDay: CalendarDay;
    count: number;

    constructor(
        private http: HttpClient,
        private events: Events,
        private navController: NavController,
        private modalController: ModalController,
        private language: LanguageService,
        private ui: UserInterfaceService,
        private utils: UtilsService
    ) {
    }

    async ngOnInit() {
    }

    async ionViewWillEnter() {
        this.ui.pageContainerScrollToTop(document.getElementsByClassName('page-container')[0] as HTMLDivElement);
        this.timelineData = [
            this.language.getWordByLanguage('howWorkStepDescription1'),
            this.language.getWordByLanguage('howWorkStepDescription2'),
            this.language.getWordByLanguage('howWorkStepDescription3'),
            this.language.getWordByLanguage('howWorkStepDescription4'),
        ];
        this.sessionScheduleOpened = true;
        this.sessionGuideOpened = true;
        this.currentDate = '';
        this.calendar = null;
        this.selectedDay = null;

        await this.getCalendarDates();
        await this.getUpcomingSessions();
    }

    checkScroll(e) {
      if (this.ui.watchPageControllerScrolled(e.target)) {
          this.events.publish('page-not-scrolled');
      } else {
          this.events.publish('page-scrolled');
      }
    }

    toggleSessionScheduleOpened() {
        this.sessionScheduleOpened = !this.sessionScheduleOpened;
    }

    toggleSessionGuideOpened() {
        this.sessionGuideOpened = !this.sessionGuideOpened;
    }

    async getUpcomingSessions() {
        this.utils.showLoading().then(loading => {
            const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
            this.http.post(environment.coachingApi + 'getComingSessions', {
                // deviceInfo: deviceInfo,
                oneDay: true,
                year: this.calendar.year,
                month: this.calendar.month,
                day: this.selectedDay.day,
            }).subscribe((response: any) => {
                this.sessions = response;
                this.count = response.length;
                loading.dismiss();
            });
        });
    }

    async getCalendarDates(direction?: string) {
        const result = await this.utils.showLoading({
            message: 'Loading Calendar...'
        }).then( async (loading) => {
            await this.sendCalendarRequest(direction).then(async (calendar: Calendar) => {
                this.calendar = calendar;
                this.selectedDay = this.calendar.today as CalendarDay;
                this.currentDate = this.calendar.year + '-' + this.calendar.month + '-' + this.calendar.today.day;
                await loading.dismiss();
            });
        });
        await this.getUpcomingSessions();
    }

    async selectDay(weekIndex: number, dayIndex: number) {
        const prevSelected = this.calendar.days[this.selectedDay.week][this.selectedDay.weekday] as CalendarDay;
        const curSelected = this.calendar.days[weekIndex][dayIndex] as CalendarDay;
        if (curSelected.upcoming || !curSelected.enable) {
            this.utils.showToast('You cannot select this day').then(() => {
            });
        } else {
            prevSelected.selected = 0;
            curSelected.selected = 1;
            this.selectedDay = curSelected;
        }
        await this.getUpcomingSessions();
    }

    getTime(timestamp) {
        return timestamp.substring(11, 16);
    }

    callNow(index) {
        // if (this.callNumber.isCallSupported()) {
        //     this.callNumber.callNumber(this.sessions[index].phone, true)
        //         .then(res => console.log('Launched dialer!', res))
        //         .catch(err => console.log('Error launching dialer', err));
        // }
        // else console.log("Call is not supported in this device!");
    }

    async sendCalendarRequest(direction: string): Promise<Calendar> {
        return new Promise(resolve => {
            const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
            const params = {...deviceInfo};
            if (this.currentDate !== '') {
                params.date = this.currentDate;
            }
            if (direction) {
                params.direction = direction;
            }
            this.http.get(environment.coachingApi + 'calendar', {
                params
            }).subscribe(async (calendar: any) => {
                resolve(calendar.calendar);
            });
        });
    }

    milliseconds(date?: string) {
        return new Date(date).getTime();
    }
}
