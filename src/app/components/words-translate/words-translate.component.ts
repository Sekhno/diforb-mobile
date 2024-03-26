import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExampleType} from "src/models/types";

@Component({
  selector: 'app-words-translate',
  templateUrl: './words-translate.component.html',
  styleUrls: ['./words-translate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordsTranslateComponent {
  @Input() examples: ExampleType[] = [];
  @Input() mood: 'landscape' | 'portrait' | 'square' = 'square';

  @Output() _onComplete = new EventEmitter<boolean>();

  currentExc = 0;
  answers: string[] = [];

  constructor() { }

  change(index: number) {
    console.log(this.answers[index]);
    console.log(this.examples[index].sentence)
    if (this.answers[index] === this.examples[index].sentence) {
      this.currentExc++;
      if (this.currentExc === this.examples.length) {
        this._onComplete.emit(true);
      }
    }
  }

}
