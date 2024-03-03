import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-words-translate',
  templateUrl: './words-translate.component.html',
  styleUrls: ['./words-translate.component.scss'],
})
export class WordsTranslateComponent {
  @Input() sentences: string[] = [];
  @Input() rightAnswers: string[] = [];
  @Input() images: string[] = [];

  @Output() _onComplete = new EventEmitter<boolean>();

  currentExc = 0;
  answers: string[] = [];

  constructor() { }

  change(index: number) {
    if (this.answers[index] === this.rightAnswers[index]) {
      this.currentExc++;
      if (this.currentExc === this.sentences.length) {
        this._onComplete.emit(true);
      }
    }
  }

}
