import {ChangeDetectorRef, Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Events} from '@ionic/angular';
import * as firebase from 'firebase';
import 'firebase/database';

declare var jsSHA: any;
declare var VidyoClient: any;

interface CallOptions {
    localName?: string;
    localPhoto?: string;
    localElement?: string;
    localIdentify?: string;
    remoteName?: string;
    remotePhoto?: string;
    remoteElement?: string;
    remoteIdentify?: string;
    type?: string;
}

@Injectable({
    providedIn: 'root'
})
export class CallService {

    HOST = 'prod.vidyo.io';
    options: CallOptions = {
        localName: '',
        localPhoto: '',
        localElement: '',
        localIdentify: '',
        remoteName: '',
        remotePhoto: '',
        remoteElement: '',
        remoteIdentify: '',
    };
    room: string;
    token: string;
    connector: any;

    constructor(
        private events: Events
    ) {
    }

    async init(options: CallOptions) {
        this.options = options;
        this.room = this.options.localIdentify + '::' + this.options.remoteIdentify;
        if (this.options.localIdentify < this.options.remoteIdentify) {
            this.room = this.options.remoteIdentify + '::' + this.options.localIdentify;
        }
        this.token = this.generateToken(environment.vidyoKey, environment.vidyoAppID, options.localName, 30000);
        this.connector = await this.createConnector();
    }

    async createConnector(): Promise<any> {
        return new Promise(resolve => {
            VidyoClient.CreateVidyoConnector({
                viewId: null, // Set to null in order to create a custom layout
                viewStyle: 'VIDYO_CONNECTORVIEWSTYLE_Default', // Will be ignored
                remoteParticipants: 16, // Will be ignored
                logFileFilter: 'warning',
                logFileName: 'VidyoConnector.log',
                userData: 0
            }).then((connector) => {
                connector.RegisterLocalCameraEventListener({
                    onAdded: (localCamera) => {
                        // New local camera added
                        // Assign view to local camera
                        this.connector.AssignViewToLocalCamera({
                            viewId: this.options.localElement, // view ID specific to render local camera
                            localCamera,
                            displayCropped: true,
                            allowZoom: false
                        }).then(() => {

                        }).catch((e) => {

                        });
                    },
                    onRemoved: (localCamera) => {
                        // Local camera removed
                    },
                    onSelected: (localCamera) => {
                        // Camera was selected/unselected by you or automatically
                    },
                    onStateUpdated: (camera, participant, state) => {
                        // Camera state was updated
                    }
                }).then(() => {
                    console.log('RegisterLocalCameraEventListener Success');
                }).catch(() => {
                    console.error('RegisterLocalCameraEventListener Failed');
                });

                connector.RegisterRemoteCameraEventListener({
                    onAdded: (camera, participant) => {
                        // Callback when a remote participant shares their camera
                        // Assign View to remote camera
                        this.connector.AssignViewToRemoteCamera({
                            viewId: this.options.remoteElement, // view ID specific to this remote camera
                            remoteCamera: camera,
                            displayCropped: true, // Show video letterboxed or cropped to fit
                            allowZoom: false
                        }).then((retValue) => {

                        }).catch(() => {

                        });
                    },
                    onRemoved: (camera, participant) => {
                        // Callback when a remote participant stops sharing camera
                    },
                    onStateUpdated: (camera, participant, state) => {
                        // Camera state was updated
                    }
                }).then(() => {
                    console.log('RegisterRemoteCameraEventListener Success');
                }).catch(() => {
                    console.error('RegisterRemoteCameraEventListener Failed');
                });

                connector.RegisterParticipantEventListener({
                    onJoined: (participant) => {
                        console.log('Joined', participant);
                    },
                    onLeft: (participant) => {
                        console.log('Left', participant);
                    },
                    onDynamicChanged: (participants, cameras) => {
                    },
                    onLoudestChanged: (participant, audioOnly) => {
                    }
                }).then(() => {
                    console.log('Registered with Participant Events Listener');
                }).catch((e) => {
                    console.log(`Error while registering with Participant Events Listener ${e}`);
                });

                connector.ShowViewAt({viewId: this.options.localElement, x: 20, y: 20, width: 120, height: 120});
                connector.ShowViewAt({
                    viewId: this.options.remoteElement, x: 0, y: 0, width: screen.availWidth, height: screen.availHeight
                });

                // Handle appearance and disappearance of microphone devices in the system
                connector.RegisterLocalMicrophoneEventListener({
                    onAdded(localMicrophone) {
                        // New microphone is available
                    },
                    onRemoved(localMicrophone) {
                        // Existing microphone became unavailable
                    },
                    onSelected(localMicrophone) {
                        // Microphone was selected/unselected by you or automatically
                    },
                    onStateUpdated(localMicrophone, state) {
                        // Microphone state was updated
                    }
                }).then(() => {
                    console.log('RegisterLocalMicrophoneEventListener Success');
                }).catch(() => {
                    console.error('RegisterLocalMicrophoneEventListener Failed');
                });

                // Handle appearance and disappearance of speaker devices in the system
                connector.RegisterLocalSpeakerEventListener({
                    onAdded(localSpeaker) {
                        // New speaker is available
                    },
                    onRemoved(localSpeaker) {
                        // Existing speaker became unavailable
                    },
                    onSelected(localSpeaker) {
                        // Speaker was selected/unselected by you or automatically
                    },
                    onStateUpdated(localSpeaker, state) {
                        // Speaker state was updated
                    }
                }).then(() => {
                    console.log('RegisterLocalSpeakerEventListener Success');
                }).catch(() => {
                    console.error('RegisterLocalSpeakerEventListener Failed');
                });
                resolve(connector);
            });
        });
    }

    generateToken(key, appID, userName, expiresInSeconds) {
        const EPOCH_SECONDS = 62167219200;
        const expires = Math.floor(Date.now() / 1000) + expiresInSeconds + EPOCH_SECONDS;
        const shaObj = new jsSHA('SHA-384', 'TEXT');
        shaObj.setHMACKey(key, 'TEXT');
        const jid = userName + '@' + appID;
        const body = 'provision' + '\x00' + jid + '\x00' + expires + '\x00';
        shaObj.update(body);
        const mac = shaObj.getHMAC('HEX');
        const serialized = body + '\0' + mac;
        console.log('\nGenerated Token: \n' + btoa(serialized));
        return btoa(serialized);
    }

    async sendSignal() {
        await firebase.database().ref('/calls/signaling/' + this.room + '/').update({
            ...this.options, room: this.room
        });
    }

    answerCall() {
        firebase.database().ref('/calls/answered/' + this.room + '/').update({
            ...this.options, room: this.room
        }).then(() => {
            this.events.publish('call-answered');
        });
    }

    hangupCall() {
        firebase.database().ref('/calls/completed/' + this.room + '/').update({
            ...this.options, room: this.room
        }).then(() => {
            this.connector.Disconnect();
            this.events.publish('call-ended');
        });
    }

    /**
     * It will connect to the video call using VidyoConnector#Connect api.
     */
    startVideoCall() {
        this.connector.Connect({
            host: this.HOST,
            token: this.token,
            displayName: this.options.localName,
            resourceId: this.room,
            onSuccess: () => {
                this.events.publish('call-connection-success');
            },
            onFailure: reason => {
                this.events.publish('call-connection-failed');
            },
            onDisconnected: reason => {
                this.events.publish('call-connection-disconnected');
            }
        }).then(status => {
            if (status) {
                this.events.publish('call-connection-success');
            }
        }).catch(() => {
            this.events.publish('call-connection-failed');
        });
    }
}
