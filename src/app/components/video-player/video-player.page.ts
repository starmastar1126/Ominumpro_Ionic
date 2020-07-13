import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})
export class VideoPlayerPage implements OnInit, OnDestroy {

  @Input() source: string;
  @Input() controls: boolean;
  @Input() fixedControls: boolean;
  @Input() autoplay: boolean;
  @Input() loop: boolean;

  isLoading: boolean;
  isPlaying: boolean;
  showVideoControls: boolean;
  showVolumeControls: boolean;
  currentVolume: number;
  currentTime: number;
  duration: number;
  playedTimeLabel: string;
  endTimeLabel: string;

  player: HTMLVideoElement;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    this.isPlaying = false;
    this.showVideoControls = false;
    this.showVolumeControls = false;
    this.currentVolume = 0.5;
    this.currentTime = 0;
    this.duration = 0;
    this.playedTimeLabel = '00:00';
    this.endTimeLabel = '00:00';
    this.player = document.getElementById('player') as HTMLVideoElement;
    this.player.load();
  }

  ngOnDestroy() {
    this.player.pause();
  }

  videoLoaded() {
    this.isLoading = false;
    this.player.volume = 0.5;
    this.autoplay = true;
    this.currentVolume = this.player.volume;
    this.duration = this.player.duration;
    this.playedTimeLabel = this.timeToString(this.currentTime);
    this.endTimeLabel = this.timeToString(this.duration);
    this.toggleVideoControls();
    if (this.autoplay) {
      this.player.play();
    }
  }

  timeUpdate() {
    this.currentTime = this.player.currentTime;
    this.playedTimeLabel = this.timeToString(this.currentTime);
  }

  seekBarChange(e) {
    if (Math.abs(e.detail.value - this.currentTime) > 0.1) {
      this.player.currentTime = e.detail.value;
    }
  }

  volumeChange() {
    this.currentVolume = this.player.volume;
  }

  changeVolume(e) {
    this.player.volume = e.detail.value;
  }

  volumeUp() {
    this.player.volume += 0.1;
  }

  volumeDown() {
    this.player.volume -= 0.1;
  }

  toggleVideoPlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  toggleFullScreen() {
    this.player.requestFullscreen();
  }

  toggleVideoControls() {
    if (this.controls) {
      if (!this.fixedControls) {
        this.showVideoControls = !this.showVideoControls;
        if (this.showVideoControls) {
          setTimeout(() => {
            this.showVideoControls = false;
            this.showVolumeControls = false;
          }, 5000);
        } else {
          this.showVolumeControls = false;
        }
      }
    }
  }

  toggleVolumeControls() {
    if (this.showVideoControls || this.fixedControls) {
      this.showVolumeControls = !this.showVolumeControls;
    }
  }

  timeToString(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = (time % 60).toFixed();
    return (Number(minutes) < 10 ? '0' + minutes : minutes) + ':' + (Number(seconds) < 10 ? '0' + seconds : seconds);
  }
  
  stopVideo() {
    this.player.pause();
    this.player.currentTime = 0;
  }

}
