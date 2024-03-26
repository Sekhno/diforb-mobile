import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {AnswersType, ExampleType} from "../../../models/types";

@Component({
  selector: 'app-select-answer',
  templateUrl: './select-answer.component.html',
  styleUrls: ['./select-answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectAnswerComponent {
  @Input() examples: (ExampleType & AnswersType)[] = [];

  @Output() _onComplete = new EventEmitter<boolean>();

  currentExc = 0;
  userAnswers: number[] = [];

  constructor() { }


  nextExc() {
    const userAnswer = this.userAnswers[this.currentExc];
    const correctAnswer = this.examples[this.currentExc].answers.findIndex(v => v.answer);

    if (userAnswer === correctAnswer) {
      this.currentExc++;
      if (this.currentExc === this.examples.length) {
        this._onComplete.emit(true);
      }
    }
  }

}
