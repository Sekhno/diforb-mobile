import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NativeAudio} from "@capacitor-community/native-audio";
import {Capacitor} from "@capacitor/core";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
})
export class VocabularyComponent {
  @Input() vocabulary = []  as {word: string; translation: string, sound: string, image: string}[];

  @Output() _onComplete = new EventEmitter<boolean>();
  currentExc = 0;

  constructor(

  ) {

  }

  async play(url: string) {
    try {
      if (Capacitor.getPlatform() === 'ios') {
        await NativeAudio.preload({
          assetId: url,
          assetPath: 'sounds/'+url,
          audioChannelNum: 1,
          isUrl: false
        });

        await NativeAudio.play({
          assetId: url,
          // time: 6.0 - seek time
        });
      } else {
        await NativeAudio.preload({
          assetId: url,
          assetPath: url,
          audioChannelNum: 1,
          isUrl: false
        });

        await NativeAudio.play({
          assetId: url,
          // time: 6.0 - seek time
        });
      }
    } catch (e) {
      console.log(e);
    }


  }

  check() {
    if (this.currentExc === this.vocabulary.length - 1) {
      this._onComplete.emit(true);
    }
  }

}
