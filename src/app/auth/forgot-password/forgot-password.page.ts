import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Location } from "@angular/common";
import {HttpClient} from '@angular/common/http';
import {LanguageService} from '../../../services/language/language.service';
import {environment} from '../../../environments/environment';
import {UtilsService} from '../../../services/utils/utils.service';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string;

  constructor(
      private navController: NavController,
      private language: LanguageService,
      private location: Location,
      private http: HttpClient,
      private utils: UtilsService,
  ) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.initializeStates();
  }

  initializeStates() {
    this.email = "";
  }

  navigateToLogin() {
    this.location.back();
  }

  async navigateToResetPassword() {
    var email = this.email
    const deviceInfo = await Device.getInfo();
    await this.http.post(environment.userApi + 'emailComfirm', {
      email: email, 
      deviceInfo: deviceInfo,
    }).subscribe((response: any) => {
      
      const status = response as number;
      console.log(status);
      if (status) {
        this.utils.showToast(this.language.getWordByLanguage('wrongEmail')).then(async () => {
          await setTimeout(()=>{
            this.initializeStates();
          },500);
        });
      }
      else {
        this.initializeStates();
        this.navController.navigateForward('/auth/reset-password', {queryParams: {email: email}});
      }
    });
  }

} 