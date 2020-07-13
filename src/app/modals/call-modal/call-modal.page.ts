import {Component, OnDestroy, OnInit} from '@angular/core';
import {Events, ModalController, NavParams} from '@ionic/angular';
import {AuthService} from '../../../services/auth/auth.service';
import {UserData} from '../../../interface/interface';
import {CallService} from '../../../services/call/call.service';

@Component({
    selector: 'app-call-modal',
    templateUrl: './call-modal.page.html',
    styleUrls: ['./call-modal.page.scss'],
})
export class CallModalPage implements OnInit, OnDestroy {

    callType = '';
    callStatus = '';
    callDirection = '';
    userId = 0;
    userName = '';
    userPhoto = '';
    userPhone = '';
    callTime = 1800;
    callTimeLabel = '30 : 00';
    callTimer: any;
    sounds = {
        outbound: '/assets/sounds/calling.mp3',
        inbound: '/assets/sounds/romantic_ringtone.mp3'
    };
    effects = {
        answer: '/assets/sounds/call_off.mp3',
        end: '/assets/sounds/end_call.mp3'
    };
    ringtonePlayer: HTMLAudioElement;
    effectPlayer: HTMLAudioElement;

    constructor(
        private events: Events,
        private navParams: NavParams,
        private modalController: ModalController,
        private auth: AuthService,
        private call: CallService
    ) {
        this.events.subscribe('call-answered', () => {
            this.callStatus = 'answer';
            this.effectPlayer.play();
            this.ringtonePlayer.pause();
            this.callDirection = 'outbound';
            this.call.startVideoCall();
            this.countdownTimer();
        });

        this.events.subscribe('call-ended', async () => {
            this.callStatus = 'end';
            this.effectPlayer.play();
            await this.modalController.dismiss({duration: 1800 - this.callTime});
        });
    }

    ngOnInit() {
        this.callType = this.navParams.get('type');
        this.callDirection = this.navParams.get('direction');
        const user = this.navParams.get('user');
        this.userId = user.id;
        this.userName = user.name;
        this.userPhoto = user.photo;
        this.userPhone = user.phone;
        console.log(this.sounds, this.callDirection, this.sounds[this.callDirection]);
        this.ringtonePlayer = document.getElementById('ringtone-player') as HTMLAudioElement;
        this.effectPlayer = document.getElementById('effect-player') as HTMLAudioElement;
        this.auth.currentUser().then((currentUser: UserData) => {
            console.log(currentUser);
            const phoneNumber = currentUser.id + '-' + currentUser.name.replace(' ', '') + '-' + currentUser.dial_code + currentUser.phone;
            this.call.init({
                localName: currentUser.name,
                localPhoto: currentUser.photo,
                localElement: 'local-stream',
                localIdentify: phoneNumber,
                remoteName: this.userName,
                remotePhoto: this.userPhoto,
                remoteElement: 'remote-stream',
                remoteIdentify: this.userId + '-' + this.userName.replace(' ', '') + '-' + this.userPhone,
                type: this.callType
            }).then(() => {
                if (this.callDirection === 'outbound') {
                    this.call.sendSignal().then(async () => {
                        await this.ringtonePlayer.play();
                    });
                } else {
                    this.ringtonePlayer.play();
                }
            });
        });
    }

    ngOnDestroy() {
        this.events.unsubscribe('call-answered');
        this.events.unsubscribe('call-ended');
    }

    countdownTimer() {
        this.callTimer = setInterval(() => {
            if (this.callTime === 0) {
                clearInterval(this.callTimer);
            } else {
                this.callTime--;
                this.callTimeLabel = this.secondToTimeStr(this.callTime);
            }
        }, 1000);
    }

    secondToTimeStr(second: number) {
        const min = Math.floor(second / 60);
        const sec = second % 60;
        return (min < 10 ? '0' + min : min) + ' : ' + (sec < 10 ? '0' + sec : sec);
    }

}
