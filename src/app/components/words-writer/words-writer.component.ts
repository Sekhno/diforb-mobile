import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ExampleType} from "src/models/types";

@Component({
  selector: 'app-words-writer',
  templateUrl: './words-writer.component.html',
  styleUrls: ['./words-writer.component.scss'],

})
export class WordsWriterComponent  implements OnChanges {
  @Input() examples: ExampleType[] = []

  @Output() _onComplete = new EventEmitter<boolean>()

  inputs = new Array(this.examples.length).fill('');
  checked = false;

  constructor() {}

  ngOnChanges() {
    this.inputs = new Array(this.examples.length).fill('');
  }

  check() {
    this.checked = true;
  }

  change() {
    const isEvery = this.inputs.every((v, i) => this.examples[i].missed === v);

    if (isEvery) {
      this._onComplete.emit(true)
    }
  }
}
