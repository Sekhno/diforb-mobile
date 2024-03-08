import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NativeAudio} from "@capacitor-community/native-audio";
import {Capacitor} from "@capacitor/core";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
})
export class VocabularyComponent implements OnChanges {
  @Input() vocabulary = [] as { word: string; translation: string, sound: string, image: string }[];

  @Output() _onComplete = new EventEmitter<boolean>();
  currentExc = 0;

  constructor() {
  }

  ngOnChanges(): void {
    if (this.vocabulary && this.vocabulary.length > 0) {
      this.preloadSounds();
    }
  }

  private preloadSounds() {
    this.vocabulary.forEach(({sound}) => {
      if (Capacitor.getPlatform() === 'ios') {
        NativeAudio.preload({
          assetId: sound,
          assetPath: 'sounds/'+sound,
          audioChannelNum: 1,
          isUrl: false
        }).then();
      } else {
        NativeAudio.preload({
          assetId: sound,
          assetPath: sound,
          audioChannelNum: 1,
          isUrl: false
        }).then();
      }
    });
  }

  async play(url: string) {
    await NativeAudio.play({
      assetId: url,
      // time: 6.0 - seek time
    });
  }

  check() {
    if (this.currentExc === this.vocabulary.length - 1) {
      this._onComplete.emit(true);
    }
  }

}
