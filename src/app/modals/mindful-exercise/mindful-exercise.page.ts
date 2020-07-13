import { Component, OnInit, ViewChild } from '@angular/core';
import {Mindfulness} from '../../../interface/interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ModalController, NavParams} from '@ionic/angular';
import {LanguageService} from '../../../services/language/language.service';
import { CountdownComponent } from 'ngx-countdown';


@Component({
  selector: 'app-mindful-exercise',
  templateUrl: './mindful-exercise.page.html',
  styleUrls: ['./mindful-exercise.page.scss'],
})
export class MindfulExercisePage implements OnInit {
  @ViewChild('countdown', { static: false }) public countdown: CountdownComponent;
  countdownDone: boolean = false;

  api = environment.api;
  data: Mindfulness[] = [];
  image = '';
  sound = '';
  paused = false;
  current = -1;
  timer = null;
  timers = 180;
  m = 1;
  
  constructor(
      private http: HttpClient,
      private navParams: NavParams,
      private modalController: ModalController,
      private language: LanguageService

  ) { this.start() }

  start() {

     var IntervalVar = setInterval( function() {

      this.timers--;
        
      if (this.timers === 0)   
       {
    
        this.timers = 180;
    
        this.m -= 1;
    
       }
    
      if (this.m === 0)
    
       {
    
        this.timers = "0";
    
        this.m = "";
    
        clearInterval(IntervalVar);
    
       }
    
    }.bind(this) , 1000)
  }

  ionViewWillEnter() {
    this.countdown.config.leftTime = 180;
    this.countdown.restart();
    this.countdown.begin();
  }

  ngOnInit() {
    const category = this.navParams.get('category');
    this.http.get(environment.toolsApi + 'mindfulness_data?category=' + category).subscribe((response: any) => {
      this.data = response.data as Mindfulness[];
      this.play();
    });
  }

  play() {
    this.countdown.resume();
    this.paused = false;
    this.current += 1;
    this.image = this.data[this.current].image_url;
    this.sound = this.data[this.current].sound_link;
    this.timer = setTimeout(() => {
      if (this.current < this.data.length) {
        this.current += 1;
        this.image = this.data[this.current].image_url;
        this.sound = this.data[this.current].sound_link;
      }
    }, 30000);

    
  }

  
  finishedExercise(){
    console.log('count down', this.countdown);
  }

  handleEvent($event){
    console.log($event);
    if($event.action === 'done'){
      this.countdownDone = true;
    }
  }

  pause() {
    this.paused = true;
    clearTimeout(this.timer);
    this.timer = null;
    this.countdown.pause();
  }

  dismissModal() {
    this.pause();
    this.modalController.dismiss().then(() => {});
  }

}

