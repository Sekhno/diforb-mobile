import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AudioProvider} from "../../../providers/audio/audio";
import {Media} from "@ionic-native/media/ngx";

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
    private audioProvider: AudioProvider,
    private media: Media
  ) { }

  play(url: string) {
    // this.audioProvider.loadSound(`/assets/${url}`);
    const curr_playing_file = this.media.create(`/assets/${url}`);

    curr_playing_file.play();
  }

  check() {
    if (this.currentExc === this.vocabulary.length - 1) {
      this._onComplete.emit(true);
    }
  }

}
