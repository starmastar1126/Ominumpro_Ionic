import { Component, ViewChild } from '@angular/core';
import { LanguageService } from '../../../../services/language/language.service';
import { IonSlides, NavController, Events } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { UtilsService } from '../../../../services/utils/utils.service';
import { AuthService } from '../../../../services/auth/auth.service';
import { SurveyQuestion, LastQuestion, UserData, Video, LessonQuiz } from '../../../../interface/interface';

import * as _ from 'lodash';

@Component({
  selector: 'app-lesson-quiz',
  templateUrl: './lesson-quiz.page.html',
  styleUrls: ['./lesson-quiz.page.scss'],
})
export class LessonQuizPage {

  @ViewChild('slides', null) slides: IonSlides;

  video: Video = {
    title_in_french: '',
    title_in_english: '',
    description_in_french: '',
    description_in_english: '',
    duration: '',
    thumbnail_link: '',
    file_link: ''
  };
  questions: LessonQuiz[];
  quizAnswers: any = [];

  intervalId = 0;
  message = '';
  seconds = 121;
  submitted: boolean = false;

  constructor(
    private http: HttpClient,
    private navController: NavController,
    private language: LanguageService,
    private events: Events,
    private utils: UtilsService, private auth: AuthService
  ) {
    this.video = JSON.parse(localStorage.getItem('selectedVideo'));
    this.getQuestions();
  }

  async ngOnInit() {
    this.start();
  }

  async ionViewWillEnter() {
  }

  async getQuestions() {
    await this.http.get(environment.VideoQuizApi + 'questions?video_id=' + this.video.id).toPromise().then((response: any) => {
      this.questions = response.data;
      this.questionsFormat(this.questions);
    });
  }

  questionsFormat(response) {
    var array = [];
    var questions = response.map(function (obj, index) {
      if (!obj.question_in_french && !obj.question_in_english) {
        _.filter(response, function (p, index2) {
          if (p.id == obj.question_id) {
            if (p.answers) {
              // for creating sub array of answers 
              array.push(p);
              array = p.answers;
              array.push(obj);
            } else {
              // for creating sub array of answers 
              array.push(p);
              array.push(obj);
            }
            p.answers = array;
            return p;
          }
        });
        array = [];
      } else {
        return obj;
      }
    });
    this.questions = questions.filter(function (val) {
      if (val !== undefined || val !== null)
        return val;
    });
    console.log(this.questions);
  }

  quizAnswer($event, ans, questionIndex, ansIndex) {
    if ($event.currentTarget.checked) {
      this.quizAnswers.push({
        id: ans.id,
        questionIndex: questionIndex,
        ansIndex: ansIndex
      });
    } else {
      _.remove(this.quizAnswers, { id: ans.id, questionIndex: questionIndex });
    }
  }

  submitQuiz() {
    this.stop();
    this.submitted = true;
  }

  className(ans, questionIndex, ansIndex) {
    let entry = { id: ans.id, questionIndex: questionIndex };
    var resp = _.findIndex(this.quizAnswers, (o) => { return _.isMatch(o, entry) }) > -1;
    console.log(resp);
    if (resp) {
      return '';
    } else {
      return 'checkbox-warning';
    }
  }

  iconName(ans, questionIndex, ansIndex) {
    let entry = { id: ans.id, questionIndex: questionIndex };
    var resp = _.findIndex(this.quizAnswers, (o) => { return _.isMatch(o, entry) }) > -1;
    console.log(resp);
    if (resp) {
      return '';
    } else {
      return 'checkmark-circle';
    }
  }

  navigatePage(page: string) {
    this.events.publish('navigate-forward-url', page);
  }

  clearTimer() { clearInterval(this.intervalId); }

  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.message = `${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.clearTimer();
        this.message = 'Time off!';
      } else {

        // if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `${this.seconds} seconds`;
      }
    }, 1000);
  }


}
