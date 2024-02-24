import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-words-writer',
  templateUrl: './words-writer.component.html',
  styleUrls: ['./words-writer.component.scss'],
})
export class WordsWriterComponent  implements OnInit {
  @Input() sentences: string[] = [
    'The weather {{input}} nice today.',
    'I {{input}} not rich.',
    'This bag {{input}} heavy.',
    'These bags {{input}} heavy.',
    'Look! There {{input}} Helen.',
    'My brother and I {{input}} good tennis players.',
    'Emily {{input}} at home.',
    'Her children {{input}} at school.',
    'I {{input}} a taxi driver.',
    'My sister {{input}} a nurse.'
  ];

  @Input() rightAnswers: string[] = ['is', 'am', 'is', 'are', 'is', 'are', 'is', 'is', 'am', 'is'];

  @Output() _onComplete = new EventEmitter<boolean>()

  inputs = new Array(this.sentences.length).fill('');
  checked = false;

  constructor() {

  }

  ngOnInit() {
    console.log('WordsWriterComponent -> ngOnInit');
  }

  check() {
    this.checked = true;
  }

  change() {
    const isEvery = this.inputs.every((v, i) => this.rightAnswers[i] === v);

    if (isEvery) {
      this._onComplete.emit(true)
    }
  }

}
