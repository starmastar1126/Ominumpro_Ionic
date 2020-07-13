import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/language/language.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(
      private navController: NavController,
      private language: LanguageService
  ) { }

  ngOnInit() {
  }

  changeLanguage(language: string) {
    this.language.setLanguage(language);
    const isSaved = localStorage.getItem('save');
    if (isSaved == 'true') this.navController.navigateForward('/auth/confirmation');
    else this.navController.navigateForward('/auth').then(() => {});
  }

}
