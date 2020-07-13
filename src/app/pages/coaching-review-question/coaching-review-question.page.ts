import { Component, OnInit } from '@angular/core';
import {Events, NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {LanguageService} from '../../../services/language/language.service';
import {UserInterfaceService} from '../../../services/user-interface/user-interface.service';
import {UtilsService} from '../../../services/utils/utils.service';

@Component({
  selector: 'app-coaching-review-question',
  templateUrl: './coaching-review-question.page.html',
  styleUrls: ['./coaching-review-question.page.scss'],
})
export class CoachingReviewQuestionPage implements OnInit {

  question = {
    french: 'How are you feeling right now?',
    english: 'How are you feeling right now?'
  };

  answers = {
    french: ['Much Better', 'Better', 'Moderate', 'Bad', 'Very Bad'],
    english: ['Much Better', 'Better', 'Moderate', 'Bad', 'Very Bad']
  };

  bottomTitles = {
    french: 'Vos réponses resteront entièrement confidentielles',
    english: 'Your answers will remain entirely confidential'
  };

  session: number;
  answer: number;

  constructor(
      private events: Events,
      private http: HttpClient,
      private navController: NavController,
      private language: LanguageService,
      private ui: UserInterfaceService,
      private utils: UtilsService,
  ) { }

  ngOnInit() {
    this.session = Number(localStorage.getItem('review-session'));
    this.answer = 0;
  }

  hasAnswer() {
    return this.answer ? 'has-score' : '';
  }

  navigateToReview() {
    localStorage.setItem('review-status', String(this.answer));
    this.navController.navigateForward('coaching-review');
  }

}
