import { Component, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';
import { IonSlides, NavController, Events, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UtilsService } from '../../../services/utils/utils.service';
import { AuthService } from '../../../services/auth/auth.service';
import { SurveyQuestion, LastQuestion, UserData } from '../../../interface/interface';

@Component({
    selector: 'app-survey-question',
    templateUrl: './survey-question.page.html',
    styleUrls: ['./survey-question.page.scss'],
})
export class SurveyQuestionPage {

    @ViewChild('slides', null) slides: IonSlides;

    bottomTitles = {
        french: 'Vos réponses resteront entièrement confidentielles',
        english: 'Your answers will remain entirely confidential'
    };
    buttonTitle = {
        french: 'Envoyer',
        english: 'Submit'
    };

    type: number;
    title: string;
    questions: SurveyQuestion[];
    answers: string[];
    hasScore: string[];
    hasAnswers: number[];
    scores: number[];
    currentIndex: number;
    lastAnswers: boolean[];
    lastQuestion: LastQuestion;

    ratingweekoverall: number = 0;
    ratingenergylevel: number = 0;
    ratingmotivationlevel: number = 0;
    ratingworkload: number = 0;
    ratingstresslevel: number = 0;
    weekly: boolean = false;

    currentUser: UserData;
    constructor(
        private http: HttpClient,
        private navController: NavController,
        private language: LanguageService,
        private events: Events,
        private utils: UtilsService, private auth: AuthService,
        private alertController: AlertController
    ) {
    }

    async ngOnInit() {

        this.auth.currentUser().then((currentUser: UserData) => {
            this.currentUser = currentUser;
        })

        this.lastQuestion = {
            question: 'In the past month, have any of the following made it hard for you to work effectively (you can choose multiple options)',
            answers: [
                'Lacking resources to do the job',
                'Uncertainty if my job is secure',
            ]
        };
        this.type = Number(localStorage.getItem('surveyType'));
        if (this.type === 0) {
            this.title = 'wellnessCheck';
        } else if (this.type === 1) {
            this.title = 'stressCheck';
        } else if (this.type === 2) {
            this.title = 'WeeklyWellbeing';
        }
        this.hasScore = ['', '', '', '', ''];
        this.hasAnswers = [0, 0, 0, 0, 0];
        this.scores = [0, 0, 0, 0, 0];
        this.currentIndex = 0;
        await this.getQuestions();
        await this.getAnswers();
        if (!this.type) await this.getLastQuestion();

        this.slides.lockSwipes(true);
    }

    async ionViewWillEnter() {
    }

    answerLastQuestion(e, index) {
        this.lastAnswers[index] = e.detail.checked;
    }

    setScore(index: number, score: number) {
        this.slides.lockSwipes(false);
        this.hasScore[index] = 'has-score';
        this.hasAnswers[index] = score;
        this.scores[index] = 4 - score;
    }

    async slideChanged() {
        this.currentIndex = await this.slides.getActiveIndex();
        this.slides.lockSwipes(true);
    }

    async slideMove(index) {
        this.currentIndex = index;
        await this.slides.slideTo(index);
    }

    nextQuestion() {
        this.slides.lockSwipes(false);
        this.slideMove(this.currentIndex + 1);
    }

    prevQuestion() {
        this.slides.lockSwipes(false);
        this.slideMove(this.currentIndex - 1);
    }

    calcScore() {
        const score = this.scores.reduce((a, b) => a + b, 0);
        const percent = score * 5;
        localStorage.setItem('surveyPercent', percent + '');
        return { score, percent };
    }

    async navigateToWeeklySurveyScore(page: string) {
        const score = this.calcScore();
        if (this.ratingweekoverall > 0 && this.ratingenergylevel > 0 && this.ratingmotivationlevel > 0
            && this.ratingworkload > 0 && this.ratingstresslevel > 0) {
            this.weekly = false;
            this.utils.showLoading().then(loading => {
                const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
                const params = {
                    // deviceInfo,
                    user_id: this.currentUser.id,
                    question1: this.ratingweekoverall,
                    question2: this.ratingenergylevel,
                    question3: this.ratingmotivationlevel,
                    question4: this.ratingworkload,
                    question5: this.ratingstresslevel
                };
                console.log(">>>>>>>>params", { ...params });

                // this.http.post('http://localhost/Hanna/survey/set_weekly_survey', { ...params }).subscribe((res) => {
                this.http.post(environment.surveyApi + 'set_weekly_survey', { ...params }).subscribe((res) => {
                    console.log(">>>>>>>>>>>success", res);

                    // if (!this.type) {
                    //     const body = { deviceInfo, answers: this.lastAnswers.join() };
                    //     this.http.post(environment.surveyApi + 'save_survey_answers', { ...body }).subscribe(() => { });
                    // }
                    loading.dismiss().then(async () => {
                        await this.events.publish('navigate-forward-url', page);
                    });
                });
            });
        } else {
            this.weekly = true;
            var options = {
                message: this.language.getWordByLanguage('weeklySurveyError'),
                buttons: ['Ok']
            };
            const alert = await this.alertController.create(options);
            await alert.present();
        }
    }

    navigatePage(page: string) {
        // if (this.ratingweekoverall > 0 && this.ratingenergylevel > 0 && this.ratingmotivationlevel > 0 && this.ratingworkload > 0
        //     && this.ratingstresslevel > 0) {
        //     this.weekly = true;
        this.events.publish('navigate-forward-url', page);
        // } else {
        //     this.weekly = false;
        //     alert('Your weekly survey is incomplete, please let us know how was your week!');
        // }
    }

    navigateToSurveyScore() {
        const score = this.calcScore();
        this.utils.showLoading().then(loading => {
            const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
            const params = {
                deviceInfo, survey_type: this.type, score,
                QA1: this.hasAnswers[0],
                QA2: this.hasAnswers[1],
                QA3: this.hasAnswers[2],
                QA4: this.hasAnswers[3],
                QA5: this.hasAnswers[4],
                QA6: this.lastAnswers,
            };
            this.http.post(environment.surveyApi + 'set_score', { ...params }).subscribe((res) => {
                if (!this.type) {
                    const body = { deviceInfo, answers: this.lastAnswers.join() };
                    this.http.post(environment.surveyApi + 'save_survey_answers', { ...body }).subscribe(() => { });
                }
                loading.dismiss().then(async () => {
                    await this.navController.navigateForward('/survey-score');
                });
            });
        });
    }

    async getQuestions() {
        const surverys = ['wellness', 'stress'];
        await this.http.get(environment.surveyApi + 'questions', { params: { type: surverys[this.type] } }).toPromise().then((response: any) => {
            this.questions = response;
        });
    }

    async getAnswers() {
        const surverys = ['wellness', 'stress'];
        await this.http.get(environment.surveyApi + 'answers', {}).toPromise().then((response: any) => {
            this.answers = response;
        });
    }

    async getLastQuestion() {
        await this.http.get(environment.surveyApi + 'lastQuestion', { params: { language: this.language.getCurrentLanguage() } }).toPromise().then((response: any) => {
            this.lastQuestion = response;
            this.lastAnswers = [];
            for (var answer of response.answers) {
                this.lastAnswers.push(false);
            }
        });
    }

}
