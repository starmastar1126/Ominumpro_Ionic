import { Component } from '@angular/core';
import {Events, ModalController} from '@ionic/angular';
import {LanguageService} from '../../../../services/language/language.service';
import {UserInterfaceService} from '../../../../services/user-interface/user-interface.service';
import {MindfulCategory} from '../../../../interface/interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {BreathingExercisePage} from '../../../modals/breathing-exercise/breathing-exercise.page';
import {MindfulExercisePage} from '../../../modals/mindful-exercise/mindful-exercise.page';

@Component({
  selector: 'app-mindful-select',
  templateUrl: './mindful-select.page.html',
  styleUrls: ['./mindful-select.page.scss'],
})
export class MindfulSelectPage {

  api: string = environment.api;
  categories: MindfulCategory[] = [];

  constructor(
      private http: HttpClient,
      private events: Events,
      private modalController: ModalController,
      private language: LanguageService,
      private ui: UserInterfaceService
  ) { }

  ionViewWillEnter() {
    this.ui.pageContainerScrollToTop(document.getElementsByClassName('page-container')[0] as HTMLDivElement);
    this.http.get(environment.toolsApi + 'mindfulness_category').subscribe((response: any) => {
      this.categories = response.data as MindfulCategory[];
    });
  }

  checkScroll(e) {
    if (this.ui.watchPageControllerScrolled(e.target)) {
      this.events.publish('page-not-scrolled');
    } else {
      this.events.publish('page-scrolled');
    }
  }

  startMindfulnessExercise(category: MindfulCategory) {
    this.modalController.create({
      component: MindfulExercisePage,
      componentProps: {
        category: category.id
      }
    }).then(modal => {
      modal.present();
    });
  }

}
