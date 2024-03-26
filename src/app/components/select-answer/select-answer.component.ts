import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter, inject,
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
  private readonly _cdr = inject(ChangeDetectorRef);
  @Input() examples: (ExampleType & AnswersType)[] = [];

  @Output() _onComplete = new EventEmitter<boolean>();

  currentExc = 0;
  userAnswers: number[] = [];
  checked = false;

  constructor() { }

  check() {
    const userAnswer = this.userAnswers[this.currentExc];
    const correctAnswer = this.examples[this.currentExc].answers.findIndex(v => v.answer);

    if (userAnswer === correctAnswer) {
      setTimeout(() => {
        this.checked = false;
        this.currentExc++;
        if (this.currentExc === this.examples.length) {
          this._onComplete.emit(true);
          console.log('Complete');
        }
        this._cdr.markForCheck();
      }, 1000)
    }

    this.checked = true;
  }

}
