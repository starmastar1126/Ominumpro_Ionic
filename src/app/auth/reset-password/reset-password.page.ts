import { Component, OnInit } from '@angular/core';
import {NavController, LoadingController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {LanguageService} from '../../../services/language/language.service';
import {environment} from '../../../environments/environment';
import {UtilsService} from '../../../services/utils/utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  params: any;
  password_1: string = '';
  password_2: string = '';

  constructor(
      private navController: NavController,
      private language: LanguageService,
      private http: HttpClient,
      private utils: UtilsService,
      private activatedRoute: ActivatedRoute,
      private loadingController: LoadingController
  ) {
    this.params = this.activatedRoute.snapshot.queryParams;
    // console.log(this.params.email);
   }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.initializeStates();
  }

  initializeStates() {
    this.password_1 = "";
    this.password_2 = "";
  }

  navigateToForgotPassword() {
    this.navController.navigateBack('/auth/forgot-password');
  }

  async navigateToConfirm() {
    if (this.password_1 != this.password_2 || this.password_1.length < 6) {
      this.utils.showToast(this.language.getWordByLanguage('wrongPassword')).then(async () => {
        await setTimeout(()=>{
          this.initializeStates();
        },500);
      });
      return;
    } 
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    const deviceInfo = await Device.getInfo();;
    this.http.post(environment.userApi + 'resetPassword', {
      email: this.params.email,
      password: this.password_1,
      deviceInfo: deviceInfo,
    }).subscribe((response: any) => {
      loading.dismiss();
      if (!response) {
        this.utils.showToast(this.language.getWordByLanguage('serverError')).then(async () => {
          await setTimeout(()=>{
            this.initializeStates();
          },500);
        });
      }
      else {
        this.utils.showToast(this.language.getWordByLanguage('successResetPassword')).then(async () => {
          await setTimeout(()=>{
            this.initializeStates();
            localStorage.setItem('confirmType', 'reset');
          },500);
          this.navController.navigateForward('/auth/login');
        });
      }
    });
  }

}
