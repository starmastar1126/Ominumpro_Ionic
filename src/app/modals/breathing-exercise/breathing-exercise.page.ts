import { Component, ViewChild } from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';
import {Events, ModalController, NavParams} from '@ionic/angular';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-breathing-exercise',
  templateUrl: './breathing-exercise.page.html',
  styleUrls: ['./breathing-exercise.page.scss'],
})
export class BreathingExercisePage {

  @ViewChild('countdown', { static: false }) public countdown: CountdownComponent;
  countdownDone: boolean = false;

  breathingType: string;

  isCountdown: boolean;
  countdownTimer: any;
  countdownTime: number;

  isStarted: boolean;
  disable_button: boolean = false;
  timer: any;
  breathingCounts: number;
  totalSeconds: number;
  zaehler: string;
  zaehlerNum: number;
  breather: any;

  state: number;
  stateClass: string;
  stateLabel: string;
  stateClasses: string[] = ['breathe-in', 'breathe-out', 'hold'];
  stateLabels: string[] = [
    this.language.getWordByLanguage('breatheIn'),
    this.language.getWordByLanguage('breatheOut'),
    this.language.getWordByLanguage('hold'),
    this.language.getWordByLanguage('hold')
  ];

  countdownPlayer: HTMLAudioElement;
  breatheInPlayer: HTMLAudioElement;
  breatheOutPlayer: HTMLAudioElement;
  breatheEndedPlayer: HTMLAudioElement;

  constructor(
      private navParams: NavParams,
      private modalController: ModalController,
      private language: LanguageService
  ) { }

  ionViewWillEnter() {
    this.countdown.stop();
    this.isCountdown = false;
    this.countdownTime = 4;
    this.countdownTimer = null;
    


    this.breathingType = this.navParams.get('breathingType');

    this.isStarted = false;

    this.timer = null;
    this.breathingCounts = 0;
    this.totalSeconds = 0;
    this.zaehler = '4 MIN';
    this.zaehlerNum = 240 ;

    this.timeNumber();

    this.breather = null;

    this.state = -1;
    this.stateClass = '';
    this.stateLabel = this.stateLabels[0];

    this.countdownPlayer = document.getElementById('countdown-player') as HTMLAudioElement;
    this.breatheInPlayer = document.getElementById('breathe-in-player') as HTMLAudioElement;
    this.breatheOutPlayer = document.getElementById('breathe-out-player') as HTMLAudioElement;
    this.breatheEndedPlayer = document.getElementById('breathe-ended-player') as HTMLAudioElement;
  }

  timeNumber(){
    switch (this.breathingType) {
      case 'balance':
        this.zaehler = ' 4 MIN ';
        break;
      case 'relax':
        this.zaehler = ' 6:30 MIN ';
        break;
      case 'fall':
        this.zaehler = ' 4 MIN ';
        break;
    }
  }

  prepareCountDown() {
    this.breathingCounts = 0;
    this.totalSeconds = 0;
    this.disable_button = true;
    this.countdownTimer = setInterval(() => {
      if (!this.isCountdown) {
        this.isCountdown = true;
        this.countdownPlayer.play();
      }
      if (this.countdownTime === 1) {
        this.isCountdown = false;
        this.isStarted = true;
        this.startBreathing();
        clearInterval(this.countdownTimer);
      } else {
        this.countdownTime--;
      }
    }, 900);
  }

  startBreathing() {
    this.state = 0;
    this.stateLabel = this.stateLabels[this.state];
    this.stateClass = this.stateClasses[this.state];
    this.playBreathingSound();
    this.countTime(); 
    this.breathingByType();
    this.countdown.restart();
  }

  finishedExercise(){
    console.log('count down', this.countdown);
  }

  handleEvent($event){
    if($event.action === 'done'){
      this.countdownDone = true;
    }
  }

  async stopBreathing() {
    await this.countdown.pause();
    await clearTimeout(this.breather);
    this.breather = null;
    this.state = 10;
    this.stateClass = '';
    this.stateLabel = this.stateLabels[1];
    this.breathingCounts = 20;
    this.countdownTime = 4;
    this.disable_button = false;
    this.isStarted = false;
    await this.breatheInPlayer.pause();
    await this.breatheOutPlayer.pause();
    await this.breatheEndedPlayer.play();
  }

  breathingByType() {
    switch (this.breathingType) {
      case 'balance':
        this.zaehler = ' 4 MIN ';
        this.countdown.config.leftTime = 240;
        this.zaehlerNum = 240 ;
        if (this.state === 0) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            this.state = 2;
            this.stateLabel = this.stateLabels[this.state];
            this.stateClass = this.stateClasses[this.state];
            this.playBreathingSound();
            this.breathingByType();
          }, 4000);
        } else if (this.state === 1) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            if (this.breathingCounts < 20) {
              this.state = 3;
              this.stateLabel = this.stateLabels[this.state];
              this.stateClass = this.stateClasses[this.state];
              this.playBreathingSound();
              this.breathingByType();
              this.breathingCounts++;
            } else {
              this.stopBreathing();
              
            }
          }, 4000);
        } else if (this.state === 2) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            this.state = 1;
            this.stateLabel = this.stateLabels[this.state];
            this.stateClass = this.stateClasses[this.state];
            this.playBreathingSound();
            this.breathingByType();
          }, 4000);
          
        } 
        else if (this.state === 3) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            if (this.breathingCounts < 20) {
              this.state = 0;
              this.stateLabel = this.stateLabels[this.state];
              this.stateClass = this.stateClasses[this.state];
              this.playBreathingSound();
              this.breathingByType();
              this.breathingCounts++;
            } else {
              this.stopBreathing();
              
            }
          }, 4000);
        
        }
        
        
        break;
      
      case 'relax':
        this.zaehler = ' 6:30 MIN ';
        this.countdown.config.leftTime = 390 ;
        this.zaehlerNum = 390 ;
        if (this.state === 0) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            this.state = 2;
            this.stateLabel = this.stateLabels[this.state];
            this.stateClass = this.stateClasses[this.state];
            this.playBreathingSound();
            this.breathingByType();
          }, 4000);
        } else if (this.state === 1) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            if (this.breathingCounts < 20) {
              this.state = 0;
              this.stateLabel = this.stateLabels[this.state];
              this.stateClass = this.stateClasses[this.state];
              this.playBreathingSound();
              this.breathingByType();
              this.breathingCounts++;
            } else {
              this.stopBreathing();
            }
          }, 8000);
        } else if (this.state === 2) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            this.state = 1;
            this.stateLabel = this.stateLabels[this.state];
            this.stateClass = this.stateClasses[this.state];
            this.playBreathingSound();
            this.breathingByType();
            
          }, 7000);
        }
        break;
      case 'fall':
        this.zaehler = ' 4 MIN ';
        this.countdown.config.leftTime = 240;
        this.zaehlerNum = 240 ;
        if (this.state === 0) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            this.state = 1;
            this.stateLabel = this.stateLabels[this.state];
            this.stateClass = this.stateClasses[this.state];
            this.playBreathingSound();
            this.breathingByType();
          }, 4000);
        } else if (this.state === 1) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            if (this.breathingCounts < 20) {
              this.state = 0;
              this.stateLabel = this.stateLabels[this.state];
              this.stateClass = this.stateClasses[this.state];
              this.playBreathingSound();
              this.breathingByType();
              this.breathingCounts++;
            } else {
              this.stopBreathing();
            }
          }, 8000);
        }
        break;
    }
  }

  playBreathingSound() {
    // return false;
    switch (this.state) {
      case 0:
        this.breatheInPlayer.play();
        break;
      case 1:
        this.breatheOutPlayer.play();
        break;
    }
  }

  countTime() {
    this.timer = setInterval(() => {
      if (this.isStarted) {
        this.totalSeconds++;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  dismissModal() {
    this.stopBreathing();
    this.modalController.dismiss();
  }

}
