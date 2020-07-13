import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {LanguageService} from '../../../services/language/language.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserData, UserPreSetting} from '../../../interface/interface';
import {UtilsService} from '../../../services/utils/utils.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  texts: any;
  type: string;
  userName: string;
  message: string;
  user_id: string;
  user_pre_setting: UserPreSetting;

  constructor(
      private navController: NavController,
      private language: LanguageService,
      private http: HttpClient,
      private utils: UtilsService
  ) { }

  ngOnInit() {
    this.texts = {
      reset: {
        text: this.language.getWordByLanguage('resetConfirm'),
        button: 'OK'
      },
      verify: {
        text: this.language.getWordByLanguage('needVerify'),
        button: 'OK'
      },
      start: {
        text: this.language.getWordByLanguage('startQuestion'),
        button: this.language.getWordByLanguage('start')
      }
    };
    this.type = localStorage.getItem('confirmType');
  }

  navigateByType() {
    if (this.type === 'start') {
      localStorage.setItem('surveyType', '0');
      this.navController.navigateForward('/tabs/prepare-survey');
    } else {
      this.navController.navigateBack('/auth');
    }
  }

  navigateToMain() {
    this.navController.navigateForward('/tabs');
  }

  async getUserProfile(): Promise<any> {
    return new Promise(resolve => {
      const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
      this.http.get(environment.userApi + 'user_profile', {
          params: {...deviceInfo}
      }).subscribe((response: any) => {
          console.log("user_profile ====> ", response);
          const user = response.user as UserData;
          this.userName = user.name;
          resolve({userName: this.userName});
          this.user_pre_setting = {
            id: -1,
            user_id: user.id,
            video_id1: -1,
            video_id2: -1,
            video_id3: -1,
            notification: -1,
            visible: false,
            created_date: user.created_at,
          };
          localStorage.setItem('userPreSetting', JSON.stringify(this.user_pre_setting));
          this.user_pre_setting = JSON.parse(localStorage.getItem('userPreSetting'));
          console.log('user_pre_setting after received user data from server: ', this.user_pre_setting);
          // this.getUserPreSetting();
      });
    });
  }

  welcomeMessage() {
    const currentLanguage = this.language.getCurrentLanguage();
    this.http.get(environment.quoteApi + 'getQuote', {
      params: {language: currentLanguage}
    }).subscribe((response: any) => {
      console.log("welcome_message ====> ", response);
      this.message = response as string;
    });
  }

  getUserPreSetting() {
    this.utils.showLoading().then(loading => {
      this.http.get(environment.userpresettingApi + this.user_id).subscribe((response: any) => {
        console.log('user_pre_setting after received from server: ', response);
        const pre_setting = response.data;
        if (pre_setting) {
          this.user_pre_setting = {
            id: pre_setting.id,
            video_id1: pre_setting.video_id1,
            video_id2: pre_setting.video_id2,
            video_id3: pre_setting.video_id3,
            notification: pre_setting.notification,
            visible: pre_setting.visible,
            user_id: this.user_pre_setting.user_id,
            created_date: this.user_pre_setting.created_date,
          };
          localStorage.setItem('userPreSetting', JSON.stringify(this.user_pre_setting));
          this.user_pre_setting = JSON.parse(localStorage.getItem('userPreSetting'));
          console.log('user_pre_setting after store in storage: ', this.user_pre_setting);
        }
        loading.dismiss();
      });
    });
  }

  ionViewWillEnter() {
    this.getUserProfile();
    this.welcomeMessage();
  }

}
