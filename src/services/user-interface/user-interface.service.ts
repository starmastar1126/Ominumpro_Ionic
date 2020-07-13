import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Events} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserInterfaceService {

  constructor(
      private events: Events
  ) { }

  hideHeaderTopBar() {
    const element = document.getElementsByClassName('top-bar')[0];
    element.classList.add('hide');
  }

  showHeaderTopBar() {
    const element = document.getElementsByClassName('top-bar')[0];
    if (element !== null) {
      element.classList.remove('hide');
    }
  }

  watchPageControllerScrolled(element: HTMLDivElement): boolean {
    return element.scrollTop === 0;
  }

  pageContainerScrollToTop(element: HTMLDivElement) {
    element.scrollTop = 0;
    this.events.publish('page-not-scrolled');
  }
}
