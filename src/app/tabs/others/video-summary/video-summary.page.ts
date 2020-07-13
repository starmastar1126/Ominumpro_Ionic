import { Component, ViewChild } from '@angular/core';
import { Video } from '../../../../interface/interface';
import { UserInterfaceService } from '../../../../services/user-interface/user-interface.service';
import { LanguageService } from '../../../../services/language/language.service';
import { Events, IonInput, NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Media } from '@ionic-native/media/ngx';
import { environment } from '../../../../environments/environment';
import { UtilsService } from '../../../../services/utils/utils.service';
import { AuthService } from 'src/services/auth/auth.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-video-summary',
  templateUrl: './video-summary.page.html',
  styleUrls: ['./video-summary.page.scss'],
})
export class VideoSummaryPage {

  @ViewChild('inputComment', null) inputComment: IonInput;
  video: Video = {
    title_in_french: '',
    title_in_english: '',
    description_in_french: '',
    description_in_english: '',
    duration: '',
    thumbnail_link: '',
    file_link: '',
    likes: 0
  };
  comment: any = null;
  comments: any;
  totalComment: any;
  totalLike: any;
  oldInput: any;
  oldSubInput: any;
  user: any;
  limitTo: number = 4;
  constructor(
    private events: Events,
    private ui: UserInterfaceService,
    private language: LanguageService,
    private http: HttpClient,
    private utils: UtilsService,
    private auth: AuthService,
    private alertController: AlertController,
    private navController: NavController
  ) {
    this.utils.showLoading().then(loading => {
      this.loadComments();
      loading.dismiss();
    });
    this.auth.currentUser().then((res) => {
      this.user = res;
    });
  }

  ionViewWillEnter() {
    this.ui.pageContainerScrollToTop(document.getElementsByClassName('page-container')[0] as HTMLDivElement);
    this.video = JSON.parse(localStorage.getItem('selectedVideo'));
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

  scrollToElement(elementId) {
    let b = document.getElementById(elementId);
    if (b)
      b.scrollIntoView()
  }

  addComment() {
    if (this.comment) {
      this.utils.showLoading().then(loading => {
        var url = environment.videocommentsApi + 'add_comment?video_id=' + this.video.id + '&user_id=' + this.user.id + '&pseudoname=' + this.user.name + '&comment=' + this.comment;
        this.http.get(url).subscribe((response: any) => {
          this.comments = response.data;
          this.comment = '';
          this.loadComments();
          console.log('this is video data:', response);
          loading.dismiss();
        });
      });
    } else {
      this.utils.showToast('Comment field can\'t be empty!');
    }
  }

  loadComments() {
    this.http.get(environment.videocommentsApi + 'list_video_comments?video_id=' + this.video.id).subscribe((response: any) => {
      this.commentsFormat(response.data);
      this.totalComments();
      this.totalLikes();
    });
  }

  commentsFormat(response) {
    var array = [];
    var comments = response.map(function (obj, index) {
      if (obj.reply_id != null) {
        _.filter(response, function (p, index2) {
          if (p.id == obj.reply_id) {
            if (p.replies) {
              array = p.replies;
              array.push(obj);
            } else {
              array.push(obj);
            }
            p.replies = array;
            return p;
          }
        });
        array = [];
        return null;
      } else {
        return obj;
      }
    });
    this.comments = comments.filter(function (val) {
      if (val !== undefined || val !== null)
        return val;
    });
    // console.log('this is comments data:', this.comments);
  }

  like(comment) {
    this.utils.showLoading().then(loading => {
      var url = environment.videocommentsApi + 'add_comment_like?video_id=' + this.video.id + '&comment_id=' + comment.id + '&user_id=' + this.user.id;
      this.http.get(url).subscribe((response: any) => {
        this.comments = response.data;
        this.loadComments();
        // console.log('this is likes data:', response);
        loading.dismiss();
      });
    });
  }

  likeVidoe() {
    this.utils.showLoading().then(loading => {
      var url = environment.videocommentsApi + 'add_video_like?video_id=' + this.video.id + '&user_id=' + this.user.id;
      this.http.get(url).subscribe((response: any) => {
        if (response.data) {
          this.video.likes = response.data.likes;
          this.loadComments();
        }
        loading.dismiss();
      });
    });
  }

  disLike(comment) {
    this.utils.showLoading().then(loading => {
      var url = environment.videocommentsApi + 'add_comment_dislike?video_id=' + this.video.id + '&comment_id=' + comment.id + '&user_id=' + this.user.id;
      this.http.get(url).subscribe((response: any) => {
        this.comments = response.data;
        this.loadComments();
        // console.log('this is dislikes data:', response);
        loading.dismiss();
      });
    });
  }

  async reply(comment, i, j) {
    // Will develop this logic later on 
    // if (j == -1) {
    //   if(this.oldInput){
    //     this.comments[i].replyInput = true;
    //     this.comments[this.oldInput].replyInput = false;
    //   } else { 
    //     this.comments[i].replyInput = true;
    //   }
    // } else {
    //   if (this.oldSubInput) {
    //     this.comments[i][j].replyInput = true;
    //     this.comments[this.oldInput][this.oldSubInput].replyInput = false;
    //   } else {
    //     this.comments[i][j].replyInput = true;
    //   }
    // }
    const alert = await this.alertController.create({
      header: this.language.getWordByLanguage('Reply') + '!',
      mode: 'ios',
      inputs: [
        {
          name: 'reply',
          type: 'text',
          placeholder: this.language.getWordByLanguage('AddaComment')
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (res) => {
            this.replied(res.reply, comment.id);
          }
        }
      ]
    });

    await alert.present();
  }

  showMore() {
    this.limitTo += 4;
  }

  totalComments() {
    this.http.get(environment.videocommentsApi + 'total_comments?video_id=' + this.video.id).subscribe((response: any) => {
      this.totalComment = response.data;
      // console.log('this is video data:', response);
    });
  }

  totalLikes() {
    this.http.get(environment.videocommentsApi + 'total_likes?video_id=' + this.video.id).subscribe((response: any) => {
      this.totalLike = response.data;
      // console.log('this is video data:', response);
    });
  }

  replied(text, commentId) {
    if (text) {
      this.utils.showLoading().then(loading => {
        var url = environment.videocommentsApi + 'add_comment?reply_id=' + commentId + '&video_id=' + this.video.id + '&user_id=' + this.user.id + '&pseudoname=' + this.user.name + '&comment=' + text;
        this.http.get(url).subscribe((response: any) => {
          this.comments = response.data;
          this.comment = '';
          this.loadComments();
          // console.log('this is video data:', response);
          loading.dismiss();
        });
      });
    } else {
      this.utils.showToast('Comment field can\'t be empty!');
    }
  }

}
