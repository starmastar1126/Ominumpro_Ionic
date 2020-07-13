import { Component, OnDestroy, OnInit } from '@angular/core';

import { Events, ModalController, ToastController, Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingControllerOption, UserData } from '../interface/interface';

import * as firebase from 'firebase';
import 'firebase/database';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { CallModalPage } from './modals/call-modal/call-modal.page';
import { Storage } from '@ionic/storage';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { UtilsService } from 'src/services/utils/utils.service';
import { environment } from '../environments/environment';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { Badge } from '@ionic-native/badge/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  loadingOptions: LoadingControllerOption;
  SDK_KEY = '9ZDl5tKRk86RbP6MKcCw0Vj0sIlxv12SYscD';
  SDK_SECRET = 'DQg5lSPwKMNp3FJxBdj3t8G0XvozDnedJ4Yt';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events,
    private modalController: ModalController,
    private toastCtrl: ToastController,
    private auth: AuthService,
    private storage: Storage,
    private firebaseX: FirebaseX,
    private utils: UtilsService,
    private http: HttpClient,
    private localNotifications: LocalNotifications,
    private navController: NavController,
    private badge: Badge
  ) {
    this.auth.getTokenForZoom();

    this.events.subscribe('show-loading', (options: LoadingControllerOption) => {
      this.isLoading = true;
      if (!options) {
        options = {
          position: 'center',
          message: 'Please wait...',
          showMessage: true,
          overlay: true
        };
      } else {
        if (options.position && options.position === null || options.position === undefined) {
          options.position = 'center';
        }

        if (options.message && options.message === null || options.message === undefined) {
          options.message = 'Please wait...';
        }

        if (options.showMessage && options.showMessage === null || options.showMessage === undefined) {
          options.showMessage = true;
        }

        if (options.overlay && options.overlay === null || options.overlay === undefined) {
          options.overlay = true;
        }
      }
      this.loadingOptions = options;
    });

    this.events.subscribe('hide-loading', () => {
      this.isLoading = false;
    });
    this.initializeApp();
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.loadingOptions = {
      position: 'center',
      message: 'Please wait...',
      showMessage: true,
      overlay: true
    };
  }

  ngOnDestroy(): void {
    this.events.unsubscribe('show-loading');
    this.events.unsubscribe('hide-loading');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
           // let status bar overlay webview
     this.statusBar.overlaysWebView(false);

      // notifications function 
      this.liveNotifications();
      // Weekly local notifications 
      this.weeklyLocalNotification();
      // Check notification detail 
      this.getNotification();

      this.events.subscribe('testing', () => {
        this.storage.get('tested').then((res) => {
          console.log(res);
        });
      });

      firebase.database().ref('/calls/signaling/').on('child_added', (snapshot) => {
        const data = snapshot.val();
        this.auth.currentUser().then((user: UserData) => {
          if (user) {
            const uid = data.remoteIdentify.split('-')[0];
            if (uid === user.id) {
              this.modalController.create({
                component: CallModalPage,
                componentProps: {
                  user: {
                    id: data.localIdentify.split('-')[0],
                    name: data.localName,
                    photo: data.localPhoto,
                    phone: data.localIdentify.split('-')[2]
                  },
                  type: data.type,
                  direction: 'inbound'
                }
              }).then(modal => {
                modal.present().then(async () => {
                  await firebase.database().ref('/calls/signaling/' + snapshot.key).remove();
                });
              });
            }
          }
        });
        console.log(snapshot.val());
      });

      firebase.database().ref('/calls/answered/').on('child_added', (snapshot) => {
        const data = snapshot.val();
        this.auth.currentUser().then((user: UserData) => {
          if (user) {
            const uid = data.remoteIdentify.split('-')[0];
            if (uid === user.id) {
              this.events.publish('call-answered', snapshot.key);
              firebase.database().ref('/calls/answered/' + snapshot.key).remove();
            }
          }
        });
        console.log(snapshot.val());
      });

      firebase.database().ref('/calls/completed/').on('child_added', (snapshot) => {
        const data = snapshot.val();
        this.auth.currentUser().then((user: UserData) => {
          if (user) {
            const uid = data.remoteIdentify.split('-')[0];
            if (uid === user.id) {
              this.events.publish('call-ended', snapshot.key);
              firebase.database().ref('/calls/completed/' + snapshot.key).remove();
            }
          }
        });
        console.log(snapshot.val());
      });
      // this.splashScreen.hide();
    });
  }

  liveNotifications() {
    this.firebaseX.subscribe('weekly-survey');
    this.firebaseX.subscribe('weekly-micro-survey');
    this.firebaseX.subscribe('monthly-survey');

    this.firebaseX.getToken()
      .then(token => {
        // console.log(`The token is ${token}`);
        this.auth.currentUser().then((res) => {
          const userId = res.id;
          this.http.get(environment.userApi + 'add_device_token', {
            params: { user_id: userId, device_token: token }
          }).subscribe((res) => {
            // console.log(res);
            console.log('updated token');
          });
        });
      }) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));

    this.firebaseX.onMessageReceived().subscribe(message => {
      // console.log(message);
      console.log("Message type: " + message.messageType);
      if (message.messageType === "notification") {
        // console.log("Notification message received");
        if (message.tap) {
          // console.log("Tapped in " + message.tap);
        }
      }
      // console.dir(message);
    });
  }

  weeklyLocalNotification() {
    // 0 => Sunday, 1 => Monday ...
    // trigger: { every: { weekday: 5, hour: 15, minute: 0 } },
    // For testing use this 
    // trigger: { every: ELocalNotificationTriggerUnit.MINUTE } 
    this.localNotifications.schedule([
      // For Weekly notificatons on Friday
      {
        id: 1,
        title: "How was your week?",
        icon: 'https://www.demo7.rac24.com/uploads/images/Icon_87x87px.jpg',
        data: {
          myData: '2', 
        },
        trigger: { every: { weekday: 5, hour: 15, minute: 0 } },
      }, 
      // For monthly notifications on Wednesday
      {
        id: 2,
        title: "Check your monthly wellbeing score!",
        icon: 'https://www.demo7.rac24.com/uploads/images/Icon_87x87px.jpg',
        data: {
          myData: '0',
        },
        trigger: { every: { weekOfMonth: 1, weekday: 3, hour: 15, minute: 0 } }, 
      }
    ])

  }

  getNotification() {
    this.localNotifications.on('click').subscribe(res => {
      this.badge.clear();
      let msg = res.data ? res.data.myData : '';
      // Action after notification click 
      if(res.id == 1){
        localStorage.setItem('weeklyNotificationCount', '0');
        this.events.publish('weeklyNotificationCount');
      }
      if(res.id == 2){
        localStorage.setItem('monthlyNotificationCount', '0');
        this.events.publish('monthlyNotificationCount');
      }
      localStorage.setItem('surveyType', msg);
      this.navController.navigateForward('/tabs/prepare-survey').then(() => {});
      // console.log(res);
    });
    this.localNotifications.on('trigger').subscribe(res => {
      this.badge.increase(1);
      // for weekly 
      if(res.id == 1){
        var count = JSON.parse(localStorage.getItem('weeklyNotificationCount'));
        if(count){ 
          localStorage.setItem('weeklyNotificationCount', count+1);
        } else {
          localStorage.setItem('weeklyNotificationCount', '1');
        }
        this.events.publish('weeklyNotificationCount');
      }
      // for monthly 
      if(res.id == 2){
        var count = JSON.parse(localStorage.getItem('monthlyNotificationCount'));
        if(count){ 
          localStorage.setItem('monthlyNotificationCount', count+1);
        } else {
          localStorage.setItem('monthlyNotificationCount', '1');
        }
        this.events.publish('monthlyNotificationCount');
      }
      let msg = res.data ? res.data.myData : '';
      
      // this.navController.navigateForward('/tabs/prepare-survey').then(() => {});
      // console.log(res);
    });
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
