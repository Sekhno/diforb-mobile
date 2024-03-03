import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-words-writer',
  templateUrl: './words-writer.component.html',
  styleUrls: ['./words-writer.component.scss'],

})
export class WordsWriterComponent  implements OnChanges {
  @Input() sentences: string[] = [];
  @Input() rightAnswers: string[] = [];

  @Output() _onComplete = new EventEmitter<boolean>()

  inputs = new Array(this.sentences.length).fill('');
  checked = false;

  constructor() {

  }

  ngOnChanges() {
    this.inputs = new Array(this.sentences.length).fill('');
    console.log(this.sentences, this.rightAnswers, this.inputs)
  }

  check() {
    this.checked = true;
  }

  change() {
    console.log('change', this.inputs);
    const isEvery = this.inputs.every((v, i) => this.rightAnswers[i] === v);

    if (isEvery) {
      this._onComplete.emit(true)
    }
  }

}
