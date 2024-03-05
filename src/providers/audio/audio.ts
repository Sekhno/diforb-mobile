import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from "@ionic/angular";
import {Media} from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import {MediaObject} from "@ionic-native/media";

declare const AudioContext: any;
declare const webkitAudioContext: any;

@Injectable()
export class AudioProvider {

  private TRACK: any = null;
  private AUDIO: any;
  private SOURCE: any;
  private CONTEXT: any = new (AudioContext || webkitAudioContext)();
  private GAIN: any = null;

  private file!: MediaObject;


  constructor(
    public http: HttpClient,
    private media: Media,
    private f: File,
  ) {}

  play() {
    console.log('---------xxx------------ Using f.applicationDirectory + 1.mp3: ', this.f.applicationDirectory + '1.mp3');
    // this.file = this.media.create('file:///assets/1.mp3');
    this.file = this.media.create(this.f.applicationDirectory + '/assets/sounds/units/unit_1/soldier.mp3');
    this.file.play();
  }

  loadSound(track: string): void {
    this.http.get(track, { responseType: "arraybuffer" })
      .subscribe((arrayBufferContent: any) => {
        this.setUpAudio(arrayBufferContent);
      });
  }

  setUpAudio(bufferedContent: any): void {
    this.CONTEXT.decodeAudioData(bufferedContent, (buffer: any) => {
      this.AUDIO = buffer;
      this.TRACK = this.AUDIO;
      this.playSound(this.TRACK);
    });
  }

  playSound(track: any): void {
    if (!this.CONTEXT.createGain) {
      this.CONTEXT.createGain = this.CONTEXT.createGainNode;
    }
    this.GAIN = this.CONTEXT.createGain();
    this.SOURCE = this.CONTEXT.createBufferSource();
    this.SOURCE.buffer = track;
    this.SOURCE.connect(this.GAIN);
    this.GAIN.connect(this.CONTEXT.destination);

    this.SOURCE.start(0);
  }

  stopSound(): void {
    if (!this.SOURCE.stop) {
      this.SOURCE.stop = this.SOURCE.noteOff;
    }
    this.SOURCE.stop(0);
  }

}
