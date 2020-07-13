import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';
import { IonInput, NavController } from '@ionic/angular';
import { UtilsService } from '../../../services/utils/utils.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DeviceInfo } from '../../../interface/interface';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    @ViewChild('inputEmail', { static: false }) inputEmail;
    @ViewChild('inputPassword', { static: false }) inputPassword;

    email: string;
    password: string;
    isSaved: boolean;

    constructor(
        private http: HttpClient,
        private navController: NavController,
        private language: LanguageService,
        private utils: UtilsService,
    ) {
    }

    ngOnInit() {
    }

    ionViewDidLoad() {
        this.initializeStates();
    }

    initializeStates() {
        this.email = '';
        this.password = '';
        this.isSaved = true; // remember_password_rgb
    }

    navigateToLanguage() {
        this.navController.navigateBack('/language').then(() => {
        });
    }

    navigateToForgotPassword() {
        this.navController.navigateForward('/auth/forgot-password').then(() => {
        });
    }

    navigateToRegister() {
        this.navController.navigateForward('/auth/register').then(() => {
        });
    }

    loginButtonClicked() {
        if (this.email == '' || this.email == null) {
            this.utils.showToast('Your email address is required').then(async () => {
                await this.inputEmail.setFocus();
            });
        } else if (this.password == '' || this.password == null) {
            this.utils.showToast('Your password is required').then(async () => {
                await this.inputPassword.setFocus();
            });
        } else {
            this.utils.showLoading().then(async (loading) => {
                const info = await Device.getInfo();
                localStorage.setItem('deviceInfo', JSON.stringify(info));
                const deviceInfo: DeviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
                const data = {
                    email: this.email,
                    password: this.password,
                    ...deviceInfo
                };
                this.http.post(environment.authApi + 'login', { ...data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe((response: any) => {
                    loading.dismiss();
                    console.log("logged user:", response);

                    if (response.status === 'success') {
                        this.utils.showToast(this.language.getWordByLanguage('loginSuccessMessage')).then(async () => {
                            this.initializeStates();
                        });
                        localStorage.setItem('confirmType', 'start');
                        localStorage.setItem('level', response.level);
                        localStorage.setItem('save', 'false');
                        if (this.isSaved) localStorage.setItem('save', 'true');
                        this.navController.navigateForward('/auth/confirmation');
                    } else {
                        this.utils.showToast(response.message).then(async () => {
                            this.initializeStates();
                        });
                    }
                }, error => {
                    loading.dismiss();
                    alert("Error:" + JSON.stringify(error));
                });
            });
        }
    }

}
