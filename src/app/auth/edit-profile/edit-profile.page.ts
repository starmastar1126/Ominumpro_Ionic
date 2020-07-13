import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize } from 'rxjs/operators';
 
import {LanguageService} from '../../../services/language/language.service';
import {UserData, Avatar} from '../../../interface/interface';
import {UtilsService} from '../../../services/utils/utils.service';
import {environment} from '../../../environments/environment';
import { Events } from '@ionic/angular';
const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  userData: UserData;
  // avatar: Avatar;
  images = [];

  @ViewChild('name', {static: false}) nameElement;
  @ViewChild('email', {static: false}) emailElement;
  @ViewChild('phone', {static: false}) phoneElement;
  @ViewChild('countryCode', {static: false}) countryCodeElement;
  @ViewChild('dialCode', {static: false}) dialCodeElement;
  @ViewChild('userLevel', {static: false}) userLevelElement;

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private navController: NavController,
    private utils: UtilsService,
    private language: LanguageService,
    private camera: Camera,
    private file: File,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private platform: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private events: Events
  ) { }

  ngOnInit() {
    this.getUserProfile();
    this.storage.set('tested', 'go to hell').then(() => {
      this.events.publish('testing');
    });
    this.initializeStates();
    this.platform.ready().then(() => {
      this.loadStoredImages();
    });
  }

  initializeStates() {
    this.userData = {
      name: "",
      email: "",
      phone: null,
      photo: "../../../assets/images/icon_user_avatar.png",
      country_code: "",
      dial_code: "",
      user_level: 1,
    }
  }

  async getUserProfile(): Promise<any> {
    return new Promise(resolve => {
      const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
      this.http.get(environment.userApi + 'user_profile', {
          params: {...deviceInfo}
      }).subscribe((response: any) => {
          console.log("user_profile ====> ", response);
          const user = response.user as UserData;
          this.userData = user;
          resolve({userData: this.userData});
      });
    });
  }

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }
 
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
 
  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }

  navigateToBack() {
    this.navController.navigateBack('/tabs/profile');
  }

  profileCheck() {
      if (this.userData.name == "") { this.nameElement.setFocus(); return false; }
      if (this.userData.email == "") { this.emailElement.setFocus(); return false; }
      if (this.userData.phone == null) { this.phoneElement.setFocus(); return false; }
      if (this.userData.country_code == "") { this.countryCodeElement.setFocus(); return false; }
      if (this.userData.dial_code == "") { this.dialCodeElement.setFocus(); return false; }
      if (this.userData.user_level == null) { this.userLevelElement.setFocus(); return false; }
      return true;
  }

  updateProfile() {
    if (this.profileCheck() == false) return;
    console.log('file ---> ', this.userData.photo);
    const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
    this.http.post(environment.userApi + 'update_user_profile', {
      data: this.userData,
      deviceInfo: deviceInfo,
    }).subscribe((response: any) => {
      if (!response) {
        this.utils.showToast(this.language.getWordByLanguage('serverError')).then(async () => {
          await setTimeout(()=>{
            this.initializeStates();
          },500);
        });
      }
      else {
        this.utils.showToast(this.language.getWordByLanguage('successUpdateProfile')).then(async () => {
          await setTimeout(()=>{
            this.initializeStates();
          },500);
          this.navController.navigateForward('/tabs/profile');
        });
      }
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [
          {
            text: 'Load from Library',
            icon: 'share',
            cssClass: 'actionSheet',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
          {
            text: 'Use Camera',
            icon: 'camera',
            cssClass: 'actionSheet',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
          }
        ]
    });
    await actionSheet.present();
  }
 
  takePicture(sourceType: PictureSourceType) {
    if (this.platform.is('cordova')) {
      var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
  
      this.camera.getPicture(options).then(imagePath => {
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
            .then(filePath => {
              let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
              let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
              this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            });
        } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
      });
    } else {
      this.utils.showToast(this.language.getWordByLanguage('webTesting')).then(async () => {
        await setTimeout(()=>{ },500);
      });
    }
  }

  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
 
  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
        let newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
    });
  }

  deleteImage(imgEntry, position) {
    this.images.splice(position, 1);
 
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(name => name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('File removed.');
      });
    });
  }

  startUpload(imgEntry) {
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
        ( < FileEntry > entry).file(file => this.readFile(file))
      })
      .catch(err => {
        this.presentToast('Error while reading file.');
      });
  }
 
  readFile(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      formData.append('file', imgBlob, file.name);
      this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }
 
  async uploadImageData(formData: FormData) {
    const loading = await this.loadingController.create({
      message: 'Uploading image...',
    });
    await loading.present();
 
    this.http.post(environment.uploadDir + 'imageUpload', formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        if (res['success']) {
          this.presentToast('File upload complete.')
        } else {
          this.presentToast('File upload failed.')
        }
      });
  }

}
