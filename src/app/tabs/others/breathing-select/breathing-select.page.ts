import { Component, OnInit } from '@angular/core';
import {Events, ModalController} from '@ionic/angular';
import {LanguageService} from '../../../../services/language/language.service';
import {UserInterfaceService} from '../../../../services/user-interface/user-interface.service';
import {BreathingExercisePage} from '../../../modals/breathing-exercise/breathing-exercise.page';

@Component({
  selector: 'app-breathing-select',
  templateUrl: './breathing-select.page.html',
  styleUrls: ['./breathing-select.page.scss'],
})
export class BreathingSelectPage {

  constructor(
      private events: Events,
      private modalController: ModalController,
      private language: LanguageService,
      private ui: UserInterfaceService
  ) {
  }

  ionViewWillEnter() {
    this.ui.pageContainerScrollToTop(document.getElementsByClassName('page-container')[0] as HTMLDivElement);
  }

  checkScroll(e) {
    if (this.ui.watchPageControllerScrolled(e.target)) {
      this.events.publish('page-not-scrolled');
    } else {
      this.events.publish('page-scrolled');
    }
  }

  startBreathingExercise(type: string) {
    this.modalController.create({
      component: BreathingExercisePage,
      componentProps: {
        breathingType: type
      }
    }).then(modal => {
      modal.present();
    });
  }

}
