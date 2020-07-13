import {Injectable, Component} from '@angular/core';
import {AlertController, Events, LoadingController, ToastController} from '@ionic/angular';
import {LoadingControllerOption} from '../../interface/interface';
import {LanguageService} from '../language/language.service';

@Component({
    selector: 'app-utils',
    styleUrls: ['./utils.service.scss'],
})

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    // tslint:disable-next-line:max-line-length
    EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

    constructor(
        private language: LanguageService,
        private events: Events,
        private loadingController: LoadingController,
        private alertController: AlertController,
        private toastController: ToastController
    ) {
    }

    async showLoading(options?: LoadingControllerOption) {
        if (options !== undefined && options.type) {
            this.events.publish('show-loading', options);
        } else if (options === undefined || options.type === undefined) {
            let message = 'Please wait...';
            if (options !== undefined) {
                if (options.message !== undefined) {
                    message = options.message ? options.message : 'Please wait...';
                }
            }
            const loading = await this.loadingController.create({message});
            await loading.present();
            return loading;
        }
    }

    hideLoading() {
        this.events.publish('hide-loading');
    }

    async showValidationError(type: number, field: string) {
        if (type === 0) {
            await this.showToast(field + ' is required.');
        } else if (type === 1) {
            await this.showToast(field + ' is invalid format.');
        }
    }

    async showToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            // cssClass: "text-center",
            duration: 2000,
        });
        toast.present();
    }

    async showAlertByOptions(options?: any) {
        if (!options) {
            options = {
                header: 'Alert',
                subHeader: '',
                message: '',
                buttons: [{
                    text: 'Ok',
                    role: 'cancel'
                }]
            };
        } else {
            if (!options.header) {
                options.header = 'Alert';
            } else if (!options.subHeader) {
                options.subHeader = '';
            } else if (!options.message) {
                options.message = '';
            } else if (!options.buttons) {
                options.buttons = [{
                    text: 'Ok',
                    role: 'cancel'
                }];
            }
        }
        const alert = await this.alertController.create(options);
        await alert.present();
    }

    async showConfirm(message?: string, title?: string, callback?: any) {
        await this.showAlert(message, title, this.language.getWordByLanguage('usedTime') == message ? 0 : 1, callback);
    }

    async showAlert(msg?: string, title?: string, type?: number, callback?: any): Promise<void> {
        if (title === '') {
            if (type === 0) {
                title = 'Alert';
            } else {
                title = 'Confirm';
            }
        }

        let buttonsArray = [
            {
                text: 'Ok',
                role: '',
                cssClass: '',
                handler: () => {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            }
        ];

        let options = {
            header: this.language.getWordByLanguage('checkOther_2'),
            message: msg,
            buttons: buttonsArray
        };

        if (type === 1) {
            buttonsArray = [
                {
                    text: 'Ok',
                    role: '',
                    cssClass: '',
                    handler: () => {
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                }, {
                    text: 'Cancel your appointment',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }
            ];

            options = {
                header: this.language.getWordByLanguage('checkOther_1'),
                message: msg,
                buttons: buttonsArray
            };
        }

        const alert = await this.alertController.create(options);
        await alert.present();
    }

    async showConfirmCancel(message?: string, title?: string, callback?: any) {
        await this.showAlertCancel(message, title, 1, callback);
    }

    async showAlertCancel(msg?: string, title?: string, type?: number, callback?: any): Promise<void> {
        if (title === '') {
            if (type === 0) {
                title = 'Alert';
            } else {
                title = 'Confirm';
            }
        }

        let buttonsArray = [
            {
                text: 'YES',
                role: '',
                cssClass: '',
                handler: () => {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            }
        ];
        if (type === 1) {
            buttonsArray = [
                {
                    text: 'YES',
                    role: '',
                    cssClass: '',
                    handler: () => {
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                }, {
                    text: 'NO',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }
            ];
        }

        const options = {
            // header: msg,
            message: msg,
            buttons: buttonsArray
        };
        const alert = await this.alertController.create(options);
        await alert.present();
    }

    isNumberValue(value: string) {
        return /^\d*\.?\d*$/.test(value);
    }
}
