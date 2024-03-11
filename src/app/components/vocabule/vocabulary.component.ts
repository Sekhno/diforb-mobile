import {Component, EventEmitter, Input, OnChanges, OnDestroy, Output} from '@angular/core';
import {NativeAudio} from "@capacitor-community/native-audio";
import {Capacitor} from "@capacitor/core";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
})
export class VocabularyComponent implements OnChanges, OnDestroy {
  @Input() vocabulary = [] as { word: string; translation: string, sound: string, image: string }[];
  @Input() mood: 'landscape' | 'portrait' | 'square' = 'square';

  @Output() _onComplete = new EventEmitter<boolean>();
  currentExc = 0;

  constructor() {
  }

  ngOnChanges(): void {
    if (this.vocabulary && this.vocabulary.length > 0) {
      this.preloadSounds();
    }
  }

  ngOnDestroy(): void {
    this.unloadSounds();
  }

  private preloadSounds() {
    this.vocabulary.forEach(({sound}) => {
      const url = Capacitor.getPlatform() === 'ios' ? 'sounds/'+sound : sound;

      NativeAudio.preload({
        assetId: sound,
        assetPath: url,
        audioChannelNum: 1,
        isUrl: false
      }).then();
    });
  }

  private unloadSounds() {
    this.vocabulary.forEach(({sound}) => {
      NativeAudio.unload({assetId: sound}).then();
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
