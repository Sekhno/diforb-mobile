import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExampleType} from "../../courses/beginners-course/units/unit1/examples";

@Component({
  selector: 'app-words-translate',
  templateUrl: './words-translate.component.html',
  styleUrls: ['./words-translate.component.scss'],
})
export class WordsTranslateComponent {
  @Input() examples: ExampleType[] = [];

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
