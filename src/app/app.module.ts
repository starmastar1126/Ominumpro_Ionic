import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountriesModalPageModule } from './modals/countries-modal/countries-modal.module';
import { IonicRatingModule } from 'ionic-rating';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BreathingExercisePageModule } from './modals/breathing-exercise/breathing-exercise.module';
import { HttpClientModule } from '@angular/common/http';
import { MindfulExercisePageModule } from './modals/mindful-exercise/mindful-exercise.module';
import { CallModalPageModule } from './modals/call-modal/call-modal.module';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Badge } from '@ionic-native/badge/ngx';

import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { MomentModule } from 'ngx-moment';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { CountdownModule } from 'ngx-countdown';
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    IonicRatingModule,
    CountriesModalPageModule,
    BreathingExercisePageModule,
    MindfulExercisePageModule,
    CallModalPageModule,
    IonicStorageModule.forRoot(),
    NgCircleProgressModule.forRoot(),
    MomentModule,
    CountdownModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    Badge,
    File,
    WebView,
    FilePath,
    NativeAudio,
    FirebaseX,
    InAppBrowser,
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }