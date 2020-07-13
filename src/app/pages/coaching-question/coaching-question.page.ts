import {Component, ViewChild} from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';
import {Events, IonSlides, NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UtilsService} from '../../../services/utils/utils.service';
import {AuthService} from '../../../services/auth/auth.service';
import {CoachingQuestion, CoachingSession} from '../../../interface/interface';
import {UserInterfaceService} from '../../../services/user-interface/user-interface.service';

interface Question {
    question?: CoachingQuestion;
    answers?: CoachingQuestion[];
}

interface Answer {
    session_id?: number;
    question_id?: string;
    answer_id?: string;
    answer_text?: string;
}

@Component({
    selector: 'app-survey-question',
    templateUrl: './coaching-question.page.html',
    styleUrls: ['./coaching-question.page.scss'],
})
export class CoachingQuestionPage {

    @ViewChild('slides', null) slides: IonSlides;

    bottomTitles = {
        french: 'Vos réponses resteront entièrement confidentielles',
        english: 'Your answers will remain entirely confidential'
    };

    title: string;
    coaching: number;
    questions: Question[];
    answers: Answer[];
    currentIndex: number;

    constructor(
        private events: Events,
        private http: HttpClient,
        private navController: NavController,
        private language: LanguageService,
        private ui: UserInterfaceService,
        private utils: UtilsService,
    ) {
    }

    ionViewWillEnter() {
        this.coaching = Number(localStorage.getItem('requested-coaching'));
        this.currentIndex = 0;
        this.questions = [];
        this.answers = [];
        this.getCoachingQuestions();
    }

    async slideChanged() {
        this.currentIndex = await this.slides.getActiveIndex();
    }

    async slideMove(index) {
        this.currentIndex = index;
        await this.slides.slideTo(index);
    }

    nextQuestion() {
        if (this.currentIndex === this.questions.length - 1) {
            this.submitAnswers();
            return;
        }
        this.slideMove(this.currentIndex + 1);
    }

    prevQuestion() {
        this.slideMove(this.currentIndex - 1);
    }

    getCoachingQuestions() {
        this.utils.showLoading().then(loading => {
            const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
            this.http.get(environment.coachingApi + 'questions', {
                params: {...deviceInfo}
            }).subscribe((response: any) => {
                this.questions = [];
                this.answers = [];
                const data = response.data;
                const questions = data.filter(x => x.question_id === null) as CoachingQuestion[];
                for (const question of questions) {
                    const answers = data.filter(x => x.question_id === question.id) as CoachingQuestion[];
                    this.questions.push({question, answers});
                    this.answers.push({
                        session_id: this.coaching,
                        question_id: question.id,
                    });
                }
                loading.dismiss();
            });
        });
    }

    setAnswer(index: number, answer: any) {
        if (this.questions[index].answers.length === 0) {
            this.answers[index].answer_text = answer;
        } else {
            this.answers[index].answer_id = answer;
        }
    }

    hasScore(index: number) {
        return Number(this.answers[index].answer_id) > 0 ? 'has-score' : '';
    }

    getAnswerIndex(index: number) {
        const answerId = this.answers[index].answer_id;
        const answer = this.questions[index].answers.filter(x => x.id === answerId);
        return answer.length > 0 ? Number(answer[0].order_number) : 0;
    }

    submitAnswers() {
        this.utils.showLoading().then(loading => {
            this.http.post(environment.coachingApi + 'set_session_answers', {...this.answers}).subscribe(() => {
                loading.dismiss();
                this.utils.showToast('Your coaching session requested to the Administrator. Please wait until you can match with a Coach User.')
                    .then(() => {
                        this.ui.showHeaderTopBar();
                        this.navController.navigateForward('/tabs/coaching').then(() => {});
                    });
            });
        });
    }

}
