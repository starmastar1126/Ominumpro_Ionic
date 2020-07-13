import {Component, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';
import {UtilsService} from '../../../services/utils/utils.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-coaching-review',
  templateUrl: './coaching-review.page.html',
  styleUrls: ['./coaching-review.page.scss'],
})
export class CoachingReviewPage implements OnInit {

  title = {
    french: 'Please rate the professional on a scale of 1-5 stars',
    english: 'Please rate the professional on a scale of 1-5 stars'
  };

  session: number;
  answer: number;
  rating: number;
  comment: string;

  constructor(
      private http: HttpClient,
      private navController: NavController,
      private language: LanguageService,
      private utils: UtilsService
  ) { }

  ngOnInit() {
    this.session = Number(localStorage.getItem('review-session'));
    this.answer = Number(localStorage.getItem('review-status'));
    this.rating = 0;
    this.comment = '';
  }

  submitReview() {
    if (this.comment === '') {
      this.utils.showToast('Please leave comment...').then(async () => {
        document.getElementById('inputComment').focus();
      });
    } else {
      if (this.rating === 0) {
        this.utils.showConfirm('Do you want to leave this review with empty rating?', '', () => {
          this.utils.showLoading().then(loading => {
            this.http.post(environment.coachingApi + 'session_review', {
              session: this.session,
              comment: this.comment,
              rating: this.rating,
              answer: this.answer
            }).subscribe(() => {
              loading.dismiss().then(async () => {
                await this.navController.navigateForward('/tabs/coaching');
              });
            });
          });
        }).then(() => {});
      } else {
        this.utils.showLoading().then(loading => {
          this.http.post(environment.coachingApi + 'session_review', {
            session: this.session,
            comment: this.comment,
            rating: this.rating,
            answer: this.answer
          }).subscribe(() => {
            loading.dismiss().then(async () => {
              await this.navController.navigateForward('/tabs/coaching');
            });
          });
        });
      }
    }
  }

}
