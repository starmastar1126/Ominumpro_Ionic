import {Component} from '@angular/core';
import {LanguageService} from '../../../../services/language/language.service';
import {UserInterfaceService} from '../../../../services/user-interface/user-interface.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-prepare-survey',
  templateUrl: './prepare-coaching.page.html',
  styleUrls: ['./prepare-coaching.page.scss'],
})
export class PrepareCoachingPage {

  type: string;

  constructor(
      private navController: NavController,
      private language: LanguageService,
      private ui: UserInterfaceService
  ) { }

  ionViewWillEnter() {
    this.ui.hideHeaderTopBar();
  }

  navigateToSurveyQuestions() {
    this.navController.navigateForward('/coaching-question').then(() => {});
  }

}
