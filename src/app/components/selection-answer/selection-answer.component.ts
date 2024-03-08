import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ExampleType} from "../../courses/beginners-course/units/unit1/examples";

@Component({
  selector: 'app-selection-answer',
  templateUrl: './selection-answer.component.html',
  styleUrls: ['./selection-answer.component.scss'],
})
export class SelectionAnswerComponent implements OnChanges {

  @Input() examples: ExampleType[] = [];

  @Output() _onComplete = new EventEmitter<boolean>();

  questions: ExampleType[] = [];
  answers: string[] = [];
  values: string[] = [];

  constructor() { }

  ngOnChanges(): void {
    if (this.examples.length) {
      this.questions = this.examples.filter(v => v.answer);
      this.answers = this.questions.map(v => v.answer);
    }
  }

  onChange() {
    if (this.values.length === this.answers.length) {
      const result = this.values.every((v, i) => v === this.answers[i]);
      this._onComplete.emit(result);
    }
  }

}
