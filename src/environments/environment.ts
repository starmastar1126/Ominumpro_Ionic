// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// https://www.demo7.rac24.com/
export const environment = {
  production: false,
  api: 'https://demo7.rac24.com/',
  authApi: 'https://demo7.rac24.com/authorization/',
  quoteApi: 'https://demo7.rac24.com/quote/',
  userApi: 'https://demo7.rac24.com/user/',
  surveyApi: 'https://demo7.rac24.com/survey/',
  videoApi: 'https://demo7.rac24.com/videos/',
  videocommentsApi: 'https://demo7.rac24.com/videoComments/',
  VideoQuizApi: 'https://demo7.rac24.com/videoQuiz/',
  coachingApi: 'https://demo7.rac24.com/coaching/',
  toolsApi: 'https://demo7.rac24.com/tools/',
  uploadDir: 'https://demo7.rac24.com/uploads/',
  userpresettingApi: 'https://demo7.rac24.com/userpresetting/',

  zoom_dev: {
    clientID: 'n1hU0AbCRRCP1Wgdf15qw',
    clientSecret: 'zFaMMSDQFgIy2Ew5XNqnQMxMPF0fmPu8',
    redirectUrl: 'https://demo7.rac24.com'
  },
  zoom_pro: {
    clientID: 'QjvkVqDJRyiuZeiMzb5ZOA',
    clientSecret: 'Wk9tzEEUOXTNNvBFY2htaXjQt8265lGS',
    redirectUrl: 'https://demo7.rac24.com'
  },

  firebaseConfig: {
    apiKey: 'AIzaSyBz5YSUlg8hzTYIcYOT6xXEQAIrha9hFWE',
    authDomain: 'mvpa-e753b.firebaseapp.com',
    databaseURL: 'https://mvpa-e753b.firebaseio.com',
    projectId: 'mvpa-e753b',
    storageBucket: 'mvpa-e753b.appspot.com',
    messagingSenderId: '956187042016',
    appId: '1:956187042016:web:66081d6104eb8d006fb085',
    measurementId: 'G-V5FGN3GNH5'
  },
  vidyoAppID: '094362.vidyo.io',
  vidyoKey: '9cb435c8d0f34541a07a58d43a75cf7f'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// wauto.de@gmail.com
// WeCare
// ionic serve --lab --browser firefox