import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';
import { IonInput, ModalController, NavController } from '@ionic/angular';
import { Country, UserData } from '../../../interface/interface';
import { CountriesService } from '../../../services/countries/countries.service';
import { CountriesModalPage } from '../../modals/countries-modal/countries-modal.page';
import { UtilsService } from "../../../services/utils/utils.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('inputFullName', null) inputFullName: IonInput;
  @ViewChild('inputEmail', null) inputEmail: IonInput;
  @ViewChild('inputPassword', null) inputPassword: IonInput;
  @ViewChild('inputConfirmPassword', null) inputConfirmPassword: IonInput;
  @ViewChild('inputPhoneNumber', null) inputPhoneNumber: IonInput;

  country: Country;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  rememberMe: boolean;
  acceptTerms: boolean;

  constructor(
    private http: HttpClient,
    private navController: NavController,
    private modalController: ModalController,
    private language: LanguageService,
    private countryService: CountriesService,
    private utils: UtilsService,
    private iab: InAppBrowser
  ) { }

  async ngOnInit() {
    this.country = this.countryService.getCountry();
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.phoneNumber = '';
    this.rememberMe = false;
    this.acceptTerms = false;
    this.country = await this.countryService.geocodeLocation();

  }

  openCountriesModal() {
    this.modalController.create({
      component: CountriesModalPage
    }).then(async modal => {
      modal.onDidDismiss().then(callback => {
        if (callback.data) {
          this.country = callback.data;
        }
      });
      await modal.present();
    });
  }

  termsAndCondtions() {
    
  }

  toggleRememberMe() {
    this.rememberMe = !this.rememberMe;
  }

  toggleAcceptTerms() {
    this.acceptTerms = !this.acceptTerms;
    let target = "_blank"; 
    const browser = this.iab.create('https://www.rabat24.com/cgu', target);
    // browser.close();
  }

  navigateToLogin() {
    this.navController.navigateBack('/auth').then(() => { });
  }

  registerButtonClicked() {
    if (this.fullName === '') {
      console.log(this.country)
      this.utils.showToast(this.language.getWordByLanguage('requiredName')).then(async () => {
        await this.inputFullName.setFocus();
      });
    } else if (this.email === '') {
      this.utils.showToast(this.language.getWordByLanguage('requiredEmail')).then(async () => {
        await this.inputEmail.setFocus();
      });
    } else if (this.password === '' || this.password.length < 6) {
      this.utils.showToast(this.language.getWordByLanguage('requiredPassword')).then(async () => {
        await this.inputPassword.setFocus();
      });
    } else if (this.password && this.confirmPassword !== this.password) {
      this.utils.showToast(this.language.getWordByLanguage('confirmMatched')).then(async () => {
        await this.inputConfirmPassword.setFocus();
      });
    } else if (this.phoneNumber === '') {
      this.utils.showToast(this.language.getWordByLanguage('requiredPhonenumber')).then(async () => {
        await this.inputPhoneNumber.setFocus();
      });
    } else if (this.acceptTerms == false) {
      this.utils.showToast(this.language.getWordByLanguage('requiredTermUse')).then(async () => {
        this.acceptTerms = true;
      });
    } else {
      this.utils.showLoading().then(loading => {
        const user: UserData = {
          name: this.fullName,
          email: this.email,
          password: this.password,
          country_code: this.country.countryCode,
          dial_code: this.country.dialCode.toString(),
          phone: Number(this.phoneNumber),
          user_level: 1
        };
        this.http.post(environment.authApi + 'register', { ...user }).subscribe((response: any) => {
          console.log(response);
          this.utils.showToast(response.message).then(async () => {
            loading.dismiss();
            if (response.status === 'success') {
              localStorage.setItem('confirmType', 'verify');
              await this.navController.navigateForward('/auth/login');
            }
          });
        });
      });
    }
  }

}
