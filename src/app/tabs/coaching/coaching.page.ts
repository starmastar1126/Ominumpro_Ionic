import {Component, ViewChild} from '@angular/core';
import {Events, LoadingController, ModalController, NavController} from '@ionic/angular';
import {LanguageService} from '../../../services/language/language.service';
import {UserInterfaceService} from '../../../services/user-interface/user-interface.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Calendar, CalendarDay, CanvasRect, CoachingReview, CoachingSession, Rect, Time} from '../../../interface/interface';
import {UtilsService} from '../../../services/utils/utils.service';
import {CallModalPage} from '../../modals/call-modal/call-modal.page';
import * as moment from 'moment';

@Component({
    selector: 'app-coaching',
    templateUrl: './coaching.page.html',
    styleUrls: ['./coaching.page.scss'],
})

export class CoachingPage {

    @ViewChild('slideWithNavMorning', {static: false}) slideWithNavMorning;
    @ViewChild('slideWithNavAfternoon', {static: false}) slideWithNavAfternoon;
    @ViewChild('slideWithNavEvening', {static: false}) slideWithNavEvening;
    morning: any;
    afternoon: any;
    evening: any;
    isWhich: string;
    timeNumber: number;
    slideOpts_3 = {
        initialSlide: 0,
        slidesPerView: 4
    };

    timelineData: any[];
    sessionScheduleOpened_1: boolean;
    sessionScheduleOpened_2: boolean;
    sessionScheduleOpened_3: boolean;
    sessionScheduleOpened_4: boolean;
    sessionScheduleOpened_5: boolean;
    sessionGuideOpened: boolean;

    slidesOpts = {
        slidesPerView: 1,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        on: {
            beforeInit() {
                const swiper = this;

                swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
                swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            setTranslate() {
                const swiper = this;
                const {
                    width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
                } = swiper;
                const params = swiper.params.coverflowEffect;
                const isHorizontal = swiper.isHorizontal();
                const transform$$1 = swiper.translate;
                const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                const rotate = isHorizontal ? params.rotate : -params.rotate;
                const translate = params.depth;
                // Each slide offset from center
                for (let i = 0, length = slides.length; i < length; i += 1) {
                    const $slideEl = slides.eq(i);
                    const slideSize = slidesSizesGrid[i];
                    const slideOffset = $slideEl[0].swiperSlideOffset;
                    const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

                    let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                    let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                    // var rotateZ = 0
                    let translateZ = -translate * Math.abs(offsetMultiplier);

                    let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                    let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

                    // Fix for ultra small values
                    if (Math.abs(translateX) < 0.001) {
                        translateX = 0;
                    }
                    if (Math.abs(translateY) < 0.001) {
                        translateY = 0;
                    }
                    if (Math.abs(translateZ) < 0.001) {
                        translateZ = 0;
                    }
                    if (Math.abs(rotateY) < 0.001) {
                        rotateY = 0;
                    }
                    if (Math.abs(rotateX) < 0.001) {
                        rotateX = 0;
                    }

                    // tslint:disable-next-line:max-line-length
                    const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                    $slideEl.transform(slideTransform);
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                    if (params.slideShadows) {
                        // Set shadows
                        // tslint:disable-next-line:max-line-length
                        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        // tslint:disable-next-line:max-line-length
                        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                        if ($shadowBeforeEl.length === 0) {
                            $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                            $slideEl.append($shadowBeforeEl);
                        }
                        if ($shadowAfterEl.length === 0) {
                            $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                            $slideEl.append($shadowAfterEl);
                        }
                        if ($shadowBeforeEl.length) {
                            $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                        }
                        if ($shadowAfterEl.length) {
                            $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                }

                // Set correct perspective for IE10
                if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                    const ws = $wrapperEl[0].style;
                    ws.perspectiveOrigin = `${center}px 50%`;
                }
            },
            setTransition(duration) {
                const swiper = this;
                swiper.slides
                    .transition(duration)
                    .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                    .transition(duration);
            }
        }
    };

    sessions: any[];
    notifications: any[];
    timer: any;
    reviews: CoachingReview[] = [
        {
            
            user_name: 'rabat24 user', // this.language.getCurrentLanguage('review_user'),
            user_photo: '/assets/images/icon_user_avatar.png',
            review_content: 'It helped me so much deal with my anxiety issues, today my anxiety is gone!',
            review_rating: 5
        },
        {
            user_name: 'rabat24 user',
            user_photo: '/assets/images/icon_user_avatar.png',
            review_content: 'I was given a therapist who is exactly what I needed. Respectful, qualified, and genuine. She is committed to my therapy as much as I am',
            review_rating: 5
        },
        {
            user_name: 'rabat24 user',
            user_photo: '/assets/images/icon_user_avatar.png',
            review_content: 'Great smoker for a long time, I wanted to get rid of this addiction. I knew I needed help getting rid of "my best friend" so I booked a session.<br>' +
                'I believed and miracle, it worked! No sleep or mood disorders, the joy of seeing the hours without cigarettes, a sweet euphoria. Stop telling yourself that this is impossible...',
            review_rating: 5
        }
    ];

    calendarShow: boolean;

    currentDate: string;
    calendar: Calendar;
    selectedDay: CalendarDay;

    timeType:string = '30';
    selectedTime?: Time;

    isNextSession: boolean = false;
    
    constructor(
        private http: HttpClient,
        private events: Events,
        private navController: NavController,
        private modalController: ModalController,
        private language: LanguageService,
        private ui: UserInterfaceService,
        private utils: UtilsService
    ) {

        this.morning = {
            isBeginningSlide: true,
            isEndSlide: false,
            slidesItems: [
                {
                    id: 1,
                    time: '08:00'
                },
                {
                    id: 2,
                    time: '08:30'
                },
                {
                    id: 3,
                    time: '09:00'
                },
                {
                    id: 4,
                    time: '09:30'
                },
                {
                    id: 5,
                    time: '10:00'
                },
                {
                    id: 6,
                    time: '10:30'
                },
                {
                    id: 7,
                    time: '11:00'
                },
                {
                    id: 8,
                    time: '11:30'
                }
            ]
        };

        this.afternoon = {
            isBeginningSlide: true,
            isEndSlide: false,
            slidesItems: [
                {
                    id: 1,
                    time: '12:00'
                },
                {
                    id: 2,
                    time: '12:30'
                },
                {
                    id: 3,
                    time: '13:00'
                },
                {
                    id: 4,
                    time: '13:30'
                },
                {
                    id: 5,
                    time: '14:00'
                },
                {
                    id: 6,
                    time: '14:30'
                },
                {
                    id: 7,
                    time: '15:00'
                },
                {
                    id: 8,
                    time: '15:30'
                }
            ]
        };

        this.evening = {
            isBeginningSlide: true,
            isEndSlide: false,
            slidesItems: [
                {
                    id: 1,
                    time: '16:00'
                },
                {
                    id: 2,
                    time: '16:30'
                },
                {
                    id: 3,
                    time: '17:00'
                },
                {
                    id: 4,
                    time: '17:30'
                },
                {
                    id: 5,
                    time: '18:00'
                },
                {
                    id: 6,
                    time: '18:30'
                },
                {
                    id: 7,
                    time: '19:00'
                },
                {
                    id: 8,
                    time: '19:30'
                }
            ]
        };
    }

    clickNextSession() {
        this.isNextSession = !this.isNextSession;
    }

    ionViewWillEnter() {
        this.ui.pageContainerScrollToTop(document.getElementsByClassName('page-container')[0] as HTMLDivElement);
        this.timelineData = [
            this.language.getWordByLanguage('howWorkStepDescription1'),
            this.language.getWordByLanguage('howWorkStepDescription2'),
            this.language.getWordByLanguage('howWorkStepDescription3'),
            this.language.getWordByLanguage('howWorkStepDescription4'),
        ];
        this.sessionScheduleOpened_1 = false;
        this.sessionScheduleOpened_2 = false;
        this.sessionScheduleOpened_3 = false;
        this.sessionScheduleOpened_4 = false;
        this.sessionScheduleOpened_5 = false;
        this.sessionGuideOpened = false;

        this.calendarShow = false;

        this.currentDate = '';
        this.calendar = null;
        this.selectedDay = null;

        const now = new Date();
        this.selectedTime = {
            hour: now.getHours(),
            minute: now.getMinutes(),
            // tslint:disable-next-line:radix
            flag: parseInt(String(now.getHours() / 12))
        };
        this.isWhich = '';
        this.timeNumber = null;
        this.getUpcomingSessions();
        // this.getRecentReviews();
        this.getCalendarDates();
    }

    showNotification() {
        const sessions = this.sessions;
        const count = sessions.length;
        this.notifications = new Array(count).fill(false);
        this.timer = setInterval(() => {
            var ok = true;
            for (var i = 0; i < count; i++) {
                let curTime = moment().valueOf();
                let sessionTime = moment(sessions[i].cs_datetime).valueOf();
                if (sessions[i].is_notification_show == 0) {
                    ok = false;
                    if (sessionTime <= curTime + 3600000) {
                        this.notifications[i] = true;
                    }
                }
            }
            if (ok) clearInterval(this.timer);
        }, 1000);
    }

    updateNotificationPushing(datetime, index) {
        this.http.get(environment.surveyApi + 'updateNotificationPushing', { params: { cs_datetime: datetime} })
        .subscribe((response: any) => {
            if (response == true) {
                this.sessions[index].is_notification_show = 1;
                this.notifications[index] = false;
            }
        });
    }

    checkScroll(e) {
        if (this.ui.watchPageControllerScrolled(e.target)) {
            this.events.publish('page-not-scrolled');
        } else {
            this.events.publish('page-scrolled');
        }
    }

    toggleSessionScheduleOpened_1() {
        this.sessionScheduleOpened_1 = !this.sessionScheduleOpened_1;
    }

    toggleSessionScheduleOpened_2() {
        this.sessionScheduleOpened_2 = !this.sessionScheduleOpened_2;
    }

    toggleSessionScheduleOpened_3() {
        this.sessionScheduleOpened_3 = !this.sessionScheduleOpened_3;
    }

    toggleSessionScheduleOpened_4() {
        this.sessionScheduleOpened_4 = !this.sessionScheduleOpened_4;
    }

    toggleSessionScheduleOpened_5() {
        this.sessionScheduleOpened_5 = !this.sessionScheduleOpened_5;
    }

    toggleSessionGuideOpened() {
        this.sessionGuideOpened = !this.sessionGuideOpened;
    }

    toggleCalendarShow() {
        this.calendarShow = !this.calendarShow;
        if (!this.calendarShow) {
            setTimeout(() => {
                this.calendar = null;
                this.selectedDay = null;
                this.currentDate = '';
                this.selectedTime = null;
                this.isWhich = '';
                this.timeNumber = null;
                this.events.publish('page-not-scrolled');
            }, 500);
        } else {
            const now = new Date();
            this.selectedTime = {
                hour: (now.getHours() <= 12 ? now.getHours() : now.getHours() - 12),
                minute: now.getMinutes(),
                // tslint:disable-next-line:radix
                flag: parseInt(String(now.getHours() / 12))
            };
            this.getCalendarDates();
            this.events.publish('page-scrolled');
        }
    }

    getUpcomingSessions() {
        this.utils.showLoading().then(loading => {
            const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
            this.http.get(environment.coachingApi + 'sessions', {
                params: { ...deviceInfo }
            }).subscribe((response: any) => {
                this.sessions = response.data;
                console.log('session ===> ', this.sessions);
                this.showNotification();
                loading.dismiss();
            });
        });
    }

    // getRecentReviews() {
    //     this.utils.showLoading().then(loading => {
    //         this.http.get(environment.coachingApi + 'coach_reviews').subscribe((response: any) => {
    //             this.reviews = response.data as CoachingReview[];
    //             loading.dismiss();
    //         });
    //     });
    // }

    requestCoachingSession() {
        if (this.isWhich == '' && this.timeNumber == null) {
            this.utils.showValidationError(0, this.language.getWordByLanguage('time')).then(() => {});
            return;
        }

        this.utils.showConfirm('Your coach will call you via Zoom call. In the meantime, if you need to cancel or reschedule your appointment, please know that all cancellations and reschedules are completed within rabat24 App. For both cancellations and reschedules, we require a minimum of 24 hours notice', '', 
        () => {
            this.utils.showLoading().then(loading => {
                const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
                const sessionDate = this.calendar.year + '-' + this.calendar.month + '-' + this.selectedDay.day + ' ' +
                    (this.selectedTime.flag > 0 ? 12 + this.selectedTime.hour : this.selectedTime.hour) + ':' +
                    (this.selectedTime.minute === 60 ? '00' : this.selectedTime.minute) + ':00';
                this.http.post(environment.coachingApi + 'set_session', {
                    deviceInfo,
                    date: sessionDate,
                    type: (this.timeType == '30' ? 1 : 2),
                }).subscribe((response: any) => {
                    loading.dismiss().then(() => {
                        this.toggleCalendarShow();
                        localStorage.setItem('requested-coaching', response.session);
                        // this.events.publish('navigate-forward-url', 'prepare-coaching');
                        this.events.publish('navigate-forward-url', 'coaching-question');
                    });
                }); 
            });
        }).then(() => {});
    }

    handleTimeType(timeType) {
        this.timeType = timeType;
    }

    coachingSessionConfirm(type, index) {
        const oldSelectedTime = this.selectedTime;
        let k = type == 'morning' ? 0 : type == 'afternoon' ? 1 : 2;
        k = k * 8 + index;
        this.selectedTime = {
            hour: k > 7 ? 8 + Math.floor(k / 2) - 12 : 8 + Math.floor(k / 2),
            minute: k & 1 ? 30 : 0,
            flag: k > 7 ? 1 : 0,
        }
        const sessionDate = this.calendar.year + '-' + this.calendar.month + '-' + this.selectedDay.day + ' ' +
                (this.selectedTime.flag > 0 ? 12 + this.selectedTime.hour : this.selectedTime.hour) + ':' +
                (this.selectedTime.minute === 60 ? '00' : this.selectedTime.minute) + ':00';

        this.http.get(environment.coachingApi + 'usedTime', {
            params: {date: sessionDate, type: this.timeType}
        }).subscribe(async (response: boolean) => {
            const ok = await response as boolean;
            if (ok == true) {
                this.utils.showConfirm(this.language.getWordByLanguage('usedTime'), '', () => {}).then(() => {});
            }
            else {
                this.isWhich = type;
                this.timeNumber = index;
            }
        });
    }

    cancelCoachingSession(session: CoachingSession) {
        this.utils.showConfirmCancel(this.language.getWordByLanguage('cancelSession'), '', () => {
            const data = {
                session_id: session.id,
            };
            this.http.post(environment.coachingApi + 'cancel_session',
                {...data},
                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).subscribe((response: any) => {
                this.getUpcomingSessions();
            });
        });
    }

    callToCoach(session: CoachingSession) {
        if (session.coach_user) {
            this.modalController.create({
                component: CallModalPage,
                componentProps: {
                    user: {
                        id: session.coach_user,
                        name: session.coach_user_name,
                        photo: session.coach_user_photo ? session.coach_user_photo : '/assets/images/icon_user_avatar.png',
                        phone: session.coach_user_phone
                    },
                    type: 'voice',
                    direction: 'outbound'
                }
            }).then(modal => {
                modal.onDidDismiss().then(async (callback) => {
                    if (callback.data.duration > 0) {
                        localStorage.setItem('review-session', String(session.id));
                        await this.navController.navigateForward('coaching-review-question');
                    }
                });
                modal.present();
            });
        } else {
            this.utils.showAlert('No coaching user has been matched to this session', '').then(() => {});
        }
    }

    getCalendarDates(direction?: string) {
        this.utils.showLoading({
            message: 'Loading Calendar...'
        }).then(loading => {
            this.sendCalendarRequest(direction).then(async (calendar: Calendar) => {
                this.calendar = calendar;
                this.selectedDay = this.calendar.today as CalendarDay;
                this.currentDate = this.calendar.year + '-' + this.calendar.month + '-' + this.calendar.today.day;
                await loading.dismiss();
            });
        });
    }

    selectDay(weekIndex: number, dayIndex: number) {
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

    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
        console.log('slide changed!');
        this.checkIfNavDisabled(object, slideView);
    }

    //Move to Next slide
    slideNext(object, slideView) {
        slideView.slideNext(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }

    //Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
        });;
    }

    //Call methods to check if slide is first or last to enable disbale navigation  
    checkIfNavDisabled(object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    }

    checkisBeginning(object, slideView) {
        slideView.isBeginning().then((istrue) => {
        object.isBeginningSlide = istrue;
        });
    }
    checkisEnd(object, slideView) {
        slideView.isEnd().then((istrue) => {
        object.isEndSlide = istrue;
        });
    }
}
