import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/language/language.service';
import { Events, NavController } from '@ionic/angular';
import { UserInterfaceService } from '../../../../services/user-interface/user-interface.service';
import { Video, VideoLink, UserPreSetting } from '../../../../interface/interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { UtilsService } from '../../../../services/utils/utils.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-micro-learning',
  templateUrl: './micro-learning.page.html',
  styleUrls: ['./micro-learning.page.scss'],
})
export class MicroLearningPage {

  api: string;
  videos: Video[] = [];
  videos_all: Video[] = [];
  audio: MediaObject;
  user_pre_setting: UserPreSetting;
  user_id: number;
  duration: number;
  videoLink: Array<any> = [];
  limitTo: number = 2;
  showMoreVideo: boolean = false;
  showMoreVideoButtton: boolean = false;

  constructor(
    private http: HttpClient,
    private events: Events,
    private navController: NavController,
    private language: LanguageService,
    private ui: UserInterfaceService,
    private utils: UtilsService,
    private media: Media,
  ) {
  }

  ionViewWillEnter() {
    this.ui.pageContainerScrollToTop(document.getElementsByClassName('page-container')[0] as HTMLDivElement);
    this.api = environment.api;
    // this.getVideoList();
    this.getUserPreSetting();
  }

  getUserPreSetting() {
    this.user_pre_setting = JSON.parse(localStorage.getItem('userPreSetting'));
    console.log('user_pre_setting from local storage: ', this.user_pre_setting);
    const today: Date = new Date(new Date().toDateString());
    const created_date: Date = new Date(new Date(this.user_pre_setting.created_date).toDateString());
    var nWeeks = this.calculateWeeks(today, created_date);
    nWeeks = 1;
    this.user_pre_setting.video_id1 = 3 + nWeeks;
    this.user_pre_setting.video_id2 = 3 + nWeeks - 1;
    this.user_pre_setting.video_id3 = 3 + nWeeks - 2;
    this.getVideoListWithIndex(3 + nWeeks);
  }

  calculateWeeks(date1: Date, date2: Date) {
    var diff_in_time = date1.getTime() - date2.getTime();
    var diff_in_day: number = diff_in_time / (1000 * 3600 * 24);
    var diff_in_week: number = diff_in_day / 7;
    diff_in_week = parseInt(diff_in_week.toString());// .split('.')[0]
    console.log("dates: ", date1, date2, diff_in_day, diff_in_week);
    return diff_in_week;
  }

  getVideoListWithIndex(max: number) {
    this.utils.showLoading().then(loading => {
      this.http.get(environment.videoApi + 'list_video').subscribe((response: any) => {
        console.log('videos with max:', response);
        const video_all: Video[] = response.data;
        console.log("videos: ", video_all.length);
        for (let i = 0; i < video_all.length; i ++) {
          if (video_all[i].id <= max) {
            this.videos_all.push(video_all[i]);
            if (video_all[i].id == this.user_pre_setting.video_id1
              || video_all[i].id == this.user_pre_setting.video_id2
              || video_all[i].id == this.user_pre_setting.video_id3) {
                this.videos.push(video_all[i]);
            }
            if (this.language.getCurrentLanguage() === 'french') {
              this.videoLink.push(video_all[i].duration);
            } else {
              this.videoLink.push(video_all[i].file_link);
            }
          }
        }
        console.log("videos: ", this.videos);
        loading.dismiss();

        var self = this;
        setTimeout(function(){
          self.showMoreVideoButtton = true;
        }, 1000);
      });
    });
  }

  getVideoList() {
    this.utils.showLoading().then(loading => {
      this.http.get(environment.videoApi + 'list_video').subscribe((response: any) => {
        this.videos = response.data;
        // console.log('this is video data:', response);
        for (const video in this.videos) {
          if (this.language.getCurrentLanguage() === 'french') {
            this.videoLink.push(this.videos[video].duration);
          } else {
            this.videoLink.push(this.videos[video].file_link);
          }
        }
        loading.dismiss();

        var self = this;
        setTimeout(function(){
          self.showMoreVideoButtton = true;
        }, 1000);
      });
    });
  }

  checkScroll(e) {
    if (this.ui.watchPageControllerScrolled(e.target)) {
      this.events.publish('page-not-scrolled');
    } else {
      this.events.publish('page-scrolled');
    }
  }

  navigateToVideoSummary(video: Video) {
    if (this.language.getCurrentLanguage() === 'french') {
      video.file_link = this.api + video.duration;
    } else {
      video.file_link = this.api + video.file_link;
    }
    localStorage.setItem('selectedVideo', JSON.stringify(video));
    this.events.publish('navigate-forward-url', 'video-summary');
  }

  moreVideos(){
    this.showMoreVideo = true;
  }

  showMore(video){
    
  }
}
