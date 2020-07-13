import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { LanguageService } from '../../../services/language/language.service';
import { UserInterfaceService } from '../../../services/user-interface/user-interface.service';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage {

  isRunBrowser: any = true;
  audioMp3File: any = ['../../../assets/sounds/Mindfulness1.mp3', '../../../assets/sounds/Mindfulness2.mp3'];
  audioBrowser: any = [];
  audioBrowser2: any = null;
  isPlayAudioFile: boolean[] = [false, false];

  constructor(
    private platform: Platform,
    private events: Events,
    private language: LanguageService,
    private ui: UserInterfaceService,
    private nativeAudio: NativeAudio
  ) {
    if (this.platform.is('mobileweb')) {
      this.isRunBrowser = true;
    }
    if (this.isRunBrowser) {
      this.audioBrowser = [new Audio(this.audioMp3File[0]), new Audio(this.audioMp3File[1])];
    } else {
      this.nativeAudio.preloadSimple('audioFile0', this.audioMp3File[0]);
      this.nativeAudio.preloadSimple('audioFile1', this.audioMp3File[1]);
    }
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

  navigatePage(page: string) {
    this.events.publish('navigate-forward-url', page);
  }

  playAudio(audio) {
    this.isPlayAudioFile[audio] = true;
    if (this.isRunBrowser) {
      this.audioBrowser[audio].play();
      this.audioBrowser[audio].addEventListener('pause', () => {
        this.isPlayAudioFile[audio] = false;
      });
    } else {
      this.nativeAudio.play('audioFile'+audio, () => {
        this.isPlayAudioFile[audio] = false;
      });
    }
  }

  stopAudio(audio) {
    if (this.isRunBrowser) {
      if (this.audioBrowser !== null) {
        this.audioBrowser[audio].pause();
        this.audioBrowser[audio] = new Audio(this.audioMp3File[audio]);
        this.isPlayAudioFile[audio] = false;
      }
    } else {
      this.nativeAudio.stop('audioFile'+audio);
      this.isPlayAudioFile[audio] = false;
    }
  }

}
