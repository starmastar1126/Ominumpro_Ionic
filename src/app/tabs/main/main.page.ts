import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';
import {UserInterfaceService} from '../../../services/user-interface/user-interface.service';
import {Events, NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UtilsService} from '../../../services/utils/utils.service';
import {CoachingReview, CoachingSession, Video} from '../../../interface/interface';
import { promise } from 'protractor';
import { resolve } from 'url';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage {

    lastScore: any;

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

    lastVideo: Video = null;
    upcomingSession: CoachingSession = {id: 0};
    reviews: CoachingReview[] = [];

    constructor(
        private http: HttpClient,
        private events: Events,
        private navController: NavController,
        private language: LanguageService,
        private ui: UserInterfaceService,
        private utils: UtilsService
    ) {
    }

    ionViewWillEnter() {
        this.ui.pageContainerScrollToTop(document.getElementsByClassName('page-container')[0] as HTMLDivElement);
        this.getLastVideo();
        this.lastScore = 0;
        this.utils.showLoading().then(loading => {
            this.getServeyScores().then(() => {
                loading.dismiss();
            })
        })
    }

    getLastVideo() {
        this.utils.showLoading().then(loading => {
            this.http.get(environment.videoApi + 'last_video').subscribe((response: any) => {
                this.lastVideo = response.data;
                this.lastVideo.thumbnail_link = environment.api + this.lastVideo.thumbnail_link;
                if (this.language.getCurrentLanguage() === 'french') {
                    this.lastVideo.file_link = environment.api + this.lastVideo.duration;
                } else {
                    this.lastVideo.file_link = environment.api + this.lastVideo.file_link;
                }
                loading.dismiss().then(() => {
                    this.getFirstUpcomingSession();
                });
            });
        });
    }

    getFirstUpcomingSession() {
        this.utils.showLoading().then(loading => {
            const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
            this.http.get(environment.coachingApi + 'first_session', {
                params: {...deviceInfo}
            }).subscribe((response: any) => {
                this.upcomingSession = response.data as CoachingSession;
                loading.dismiss().then(() => {
                    this.getRecentCoachingReviews();
                });
            });
        });
    }

    getRecentCoachingReviews() {
        this.utils.showLoading().then(loading => {
            this.http.get(environment.coachingApi + 'coach_reviews').subscribe((response: any) => {
                this.reviews = response.data as CoachingReview[];
                loading.dismiss();
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

    milliseconds(date?: string) {
        return new Date(date).getTime();
    }

    navigateToVideoSummary() {
        localStorage.setItem('selectedVideo', JSON.stringify(this.lastVideo));
        this.events.publish('navigate-forward-url', 'video-summary');
    }

    navigateToSurvey() {
      localStorage.setItem('surveyType', '0');
      this.navController.navigateForward('survey-question').then(() => {});
    }

    navigateToTools() {
      this.events.publish('navigate-forward-url', 'breathing-select');
    }

    navigateToCoaching() {
        this.events.publish('navigate-forward-url', 'coaching');
    }

    async getServeyScores(): Promise<any> {
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

}
